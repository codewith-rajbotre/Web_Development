const express = require('express');
const app = express();
const backVariable = "hello form variable."
app.get("/", (req, res)=>{res.send(`${backVariable} in express new text`);});
app.listen(8080);