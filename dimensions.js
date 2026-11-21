// Importera moduler för bildhantering
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Ange mappen med originalbilder
const inputDir = "./images";

// Läs in JPG-, JPEG- och PNG-filer
const files = fs.readdirSync(inputDir).filter((file) => {
    return [".jpg", ".jpeg", ".png"].includes(
        path.extname(file).toLowerCase()
    );
});

// Hämta dimensionerna för varje bild
files.forEach(async (file) => {
    const inputPath = path.join(inputDir, file);

    const metadata = await sharp(inputPath).metadata();

    console.log(`${file}: ${metadata.width} x ${metadata.height}`);
});