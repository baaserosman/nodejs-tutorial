let filesystem = require('fs');


// fs.mkdir("Testordner", dirCreated);

// function dirCreated(){
//     console.log("Ordner wurde erstellt!");
    
//     fs.appendFile("file1.txt", "Hallo", fileCreated);

//     function fileCreated(){
//         console.log("Deine Datei wurde erstellt!");
//     }
// }

filesystem.mkdir("Desktop/test/.txt", dirCreated);

function dirCreated(){
    console.log("Ordner wurde erstellt!");
}