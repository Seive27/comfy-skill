import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const svg = path.join(root, "assets/readme-banner.svg");
const out = path.join(root, "assets/readme-banner.webp");

const svgBuffer = fs.readFileSync(svg);
const webpBuffer = await sharp(svgBuffer)
  .resize(1984, 794)
  .webp({ quality: 92, effort: 6, alphaQuality: 100 })
  .toBuffer();

fs.writeFileSync(out, webpBuffer);
const meta = await sharp(out).metadata();
console.log(
  `${path.basename(out)} -> ${meta.width}x${meta.height}, ${fs.statSync(out).size} bytes`
);
