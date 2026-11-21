// importerar moduler för bildbearbetning och filhantering
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Ange mappar för originalbilder och optimerade bilder
const inputDir = "./images";
const outputDir = "./images/optimized";


// Skapa output-mappen om den inte redan finns
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Läs in och filtrera fram bilder i JPG, JPEG och PNG
const files = fs.readdirSync(inputDir).filter((file) => {
    return [".jpg", ".jpeg", ".png"].includes(
        path.extname(file).toLowerCase()
    );
});


// Loopa igenom alla bildfiler
files.forEach((file) => {
    console.log("Behandlar bild:", file);

    // Skapa sökvägen till originalbilden
    const inputPath = path.join(inputDir, file);

    // Hämta filnamnet utan filändelse
    const fileName = path.parse(file).name;

    // Skapa sökvägen till den nya WebP-bilden
    const outputPath = path.join(outputDir, fileName + ".webp");

    sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log("Konverterad:", outputPath))
        .catch((error) => console.log("Fel:", error));

});