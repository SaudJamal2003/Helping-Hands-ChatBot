const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('express-async-errors');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3002

const chatRoutes = require('./chatbot.controller');

app.listen(port,
    () => console.log(`server running at port ${port}`))

app.use(cors({
    origin: ['http://localhost:3000', '*'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(bodyparser.json());

app.get('/', (req, res) => {
    return res.json({ status: "Success" })
})


app.use('/', chatRoutes);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong')
});
