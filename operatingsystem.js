let os = require("os");

let bytes = os.freemem();
let kbytes = bytes / 1000;
let mbytes = kbytes / 1000
let gbytes = mbytes / 1000
let gbytesRounded = Math.round(gbytes)

console.log("Free memory:" + gbytesRounded + " Gigabayts");
