const express = require ('express')
const router = express.Router()
// middleware that is specific in this router
router.use((req, res , next)=>{
    console.log('Time:', Data.now())
    next()
})

router.get('/',(req, res)=>{
    res.send('This is the Home Page')
})
router.get('/blogs' , (req, res)=>{
    res.send("This is a blogs page");
 
})

module.exports = router