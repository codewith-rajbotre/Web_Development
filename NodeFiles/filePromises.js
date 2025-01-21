import fs from "fs/promises"
let a = await fs.readFile("new.txt")
console.log(a.toString())