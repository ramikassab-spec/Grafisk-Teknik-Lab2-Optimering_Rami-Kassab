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


// Skriv ut filerna i terminalen
console.log(files);