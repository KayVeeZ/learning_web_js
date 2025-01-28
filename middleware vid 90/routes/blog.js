const express = require("express");
const router = express.Router();

// Middleware that is specific to this router
router.use((req, res, next)=>{
    console.log("Time:", Date.now());
    next();
});

// get home route
router.get("/",(req,res) => {
    res.send("Birds home page");
});

router.get("/about",(req,res) => {
    res.send("about birds");
});

module.exports = router;