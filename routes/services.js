const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send('Services page')
})

module.exports = router