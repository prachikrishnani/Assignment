const express = require("express");
const mongoose = require("mongoose")
require("./db/conn");
const Movie = require("./models/movie");

const app = express();
const port = process.env.PORT || 8000 ;

app.get("/", (req,res) => {
    res.send("hello get");

})
app.use(express.json());

app.post("/movie", (req, res) => {
    console.log(req.body);
    const user = new Movie(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);

    })
    res.send("hello post");
})
app.listen(port, () => {
    console.log(`connection setup ${port}`);

})