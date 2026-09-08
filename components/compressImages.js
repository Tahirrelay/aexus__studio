const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

async function compressImagesInDir(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await compressImagesInDir(fullPath);
    } else if (entry.isFile() && entry.name.match(/\.(jpg|jpeg|png)$/i)) {
      const tempPath = path.join(dir, `temp-${entry.name}`);
      try {
        await sharp(fullPath)
          .rotate() // Auto-orient based on EXIF
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .png({ quality: 80, compressionLevel: 8 })
          .toFile(tempPath);

        // Purani file delete karke temporary file ko original naam de dein
        fs.unlinkSync(fullPath);
        fs.renameSync(tempPath, fullPath);
        console.log(`Successfully compressed: ${fullPath}`);
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

(async () => {
  console.log('Starting safe image compression...');
  await compressImagesInDir(publicDir);
  console.log('All images processed successfully!');
})();