const express = require('express')
const router = express.Router()

const Services = require('./chatbot.services');

router.post('/chat', async (req, res) => {
    const userInput1 = req.body.input;
    console.log("User input ", userInput1)
    const messageResponse = await Services.run(userInput1);
    console.log("Response ", messageResponse)
    res.json({messageResponse});
});

module.exports = router;