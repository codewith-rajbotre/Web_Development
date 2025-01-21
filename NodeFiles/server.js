const fs = require("fs")

// fs.writeFileSync("new.txt","The content written within the file ")

fs.writeFile("text.txt","This is the content of text file",()=>{
    console.log("Writing Complete")
    fs.readFile("text.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs,fs.appendFile("text.txt"," NewText Added",(e , d)=>{
    console.log(d)
})

