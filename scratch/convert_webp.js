import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = path.resolve("public/model");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".png"));

console.log(`Found ${files.length} PNG files in ${dir}`);

for (const file of files) {
  const inputPath = path.join(dir, file);
  const outName = file.replace(/\.png$/, ".webp");
  const outputPath = path.join(dir, outName);

  const initialStat = fs.statSync(inputPath);
  await sharp(inputPath)
    .webp({ quality: 90, effort: 6 })
    .toFile(outputPath);

  const finalStat = fs.statSync(outputPath);
  const reduction = (((initialStat.size - finalStat.size) / initialStat.size) * 100).toFixed(1);
  console.log(`Converted: ${file} (${(initialStat.size / 1024).toFixed(0)} KB) -> ${outName} (${(finalStat.size / 1024).toFixed(0)} KB) [-${reduction}%]`);
}

// Also convert assets in src/assets
const assetsDir = path.resolve("src/assets");
const assetFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith(".png") || f.endsWith(".jpg"));

for (const file of assetFiles) {
  const inputPath = path.join(assetsDir, file);
  const outName = file.replace(/\.(png|jpg)$/, ".webp");
  const outputPath = path.join(assetsDir, outName);

  const initialStat = fs.statSync(inputPath);
  await sharp(inputPath)
    .webp({ quality: 90, effort: 6 })
    .toFile(outputPath);

  const finalStat = fs.statSync(outputPath);
  const reduction = (((initialStat.size - finalStat.size) / initialStat.size) * 100).toFixed(1);
  console.log(`Converted asset: ${file} (${(initialStat.size / 1024).toFixed(0)} KB) -> ${outName} (${(finalStat.size / 1024).toFixed(0)} KB) [-${reduction}%]`);
}
