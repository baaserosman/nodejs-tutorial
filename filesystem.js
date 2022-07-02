let filesystem = require('fs');


// fs.mkdir("Testordner", dirCreated);

// function dirCreated(){
//     console.log("Ordner wurde erstellt!");
    
//     fs.appendFile("file1.txt", "Hallo", fileCreated);

//     function fileCreated(){
//         console.log("Deine Datei wurde erstellt!");
//     }
// }

let currentPath = "C:/Dev/Youtube/test/";

// filesystem.mkdir(currentPath + ".txt", dirCreated);
filesystem.readdir(currentPath, dirRead);

function dirRead(err, files) {
    console.log("Verzeichnis ausgelesen:" + currentPath);
    console.log(files);
}

function dirCreated() {
    console.log("Ordner wurde erstellt!");

    filesystem.rename(
      currentPath + "Rechnung1.txt",
      currentPath + ".txt/Rechnung1.txt",
      copySuccess
    );
}

function copySuccess() {
    console.log("Die Datei wurde erfolgreich verschoben.")
}