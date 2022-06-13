require('dotenv').config()
const express = require("express")
const axios = require("axios")
const port = 5000
const app = express()
const KEY = process.env.KEY;
const HOST = process.env.HOST;

app.get('/api/todo', async (req, res) => {

    const requestOptions = {
        headers: {
            "X-RapidAPI-Key": `${KEY}`,
            "X-RapidAPI-Host": `${HOST}`
        }
    }
    const res2 = await axios.get("https://league-of-legends-esports.p.rapidapi.com/events/107424951278581688", requestOptions);

    res.json(res2.data);
})

app.listen(port, () => console.log(`Server started listening on port ${port}`));