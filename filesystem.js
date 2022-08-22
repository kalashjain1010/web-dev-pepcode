let fs = require("fs");//this is used to create read update or delete

// let buffer =fs.readFileSync("abc.txt")//it reads as a buffer
// console.log(buffer);
// console.log(" "+ buffer); //after we concatinate with string it gives string value

// // to create file-> 
// fs.openSync("baka.txt","w")


// //to write and create file (if there is already some content it will be replaced)
// fs.writeFileSync("baka.txt","nya maal");

// // to append update
// fs.appendFileSync("baka.txt", " us k aage\n jadu")

// // to create directory or folder
// fs.mkdirSync("meraFolder")
// fs.writeFileSync("meraFolder/teriFile.txt","tera content")
// fs.writeFileSync("meraFolder/meriFile.txt","mera content")
// // to remove files from a directory 

// let content = fs.readdirSync("meraFolder");
// console.log(content);

// for (let i = 0; i < content.length; i++) {
//     console.log(content[i],"will be removed");
//     fs.unlinkSync("meraFolder/" + content[i]);
// }