let fs = require('fs');
let path = require('path');


// fs.mkdir("Testordner", dirCreated);

// function dirCreated(){
//     console.log("Ordner wurde erstellt!");
    
//     fs.appendFile("file1.txt", "Hallo", fileCreated);

//     function fileCreated(){
//         console.log("Deine Datei wurde erstellt!");
//     }
// }

let currentPath = "C:/Dev/Youtube/test/";

// fs.mkdir(currentPath + ".txt", dirCreated);
fs.readdir(currentPath, dirRead);


function dirRead(err, files) {
    console.log("Verzeichnis ausgelesen:" + currentPath);
    console.log(files);

    files.forEach(processFile);
}

//file=Rechnung1.txt;
function processFile(file) {
    let extension = path.extname(file);
    console.log("Extension is " + extension);
    
    fs.mkdir(currentPath+extension, function(){
        console.log("Ordner wurde erstellt.");
        fs.rename(currentPath + file, currentPath + extension+"/" + file, copySuccess)
    });

}

// function dirCreated() {
//     console.log("Ordner wurde erstellt!");

//     // fs.rename(
//     //   currentPath + "Rechnung1.txt",
//     //   currentPath + ".txt/Rechnung1.txt",
//     //   copySuccess
//     // );
// }

function copySuccess() {
    console.log("Die Datei wurde erfolgreich verschoben.")
}