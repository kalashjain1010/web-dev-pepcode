for (let i = 0; i < content.length; i++) {
    console.log(content[i],"will be removed");
    fs.unlinkSync("meraFolder/" + content[i])
}