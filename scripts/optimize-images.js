import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');
const maxWidth = 1920;
const quality = 85;

async function optimizeImages() {
  try {
    const files = await readdir(imagesDir);
    const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
    
    console.log(`Found ${jpgFiles.length} images to optimize...`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of jpgFiles) {
      const inputPath = join(imagesDir, file);
      const stats = await stat(inputPath);
      const originalSize = stats.size;
      totalOriginalSize += originalSize;
      
      try {
        // Create a temporary output path
        const outputPath = join(imagesDir, `temp_${file}`);
        
        // Optimize the image
        await sharp(inputPath)
          .resize(maxWidth, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ 
            quality: quality,
            mozjpeg: true
          })
          .toFile(outputPath);
        
        // Get optimized size
        const optimizedStats = await stat(outputPath);
        const optimizedSize = optimizedStats.size;
        totalOptimizedSize += optimizedSize;
        
        // Replace original with optimized
        const { rename } = await import('fs/promises');
        await rename(outputPath, inputPath);
        
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        console.log(`✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`);
      } catch (error) {
        console.error(`✗ Failed to optimize ${file}:`, error.message);
      }
    }
    
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n✓ Optimization complete!`);
    console.log(`Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Savings: ${totalSavings}%`);
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();

