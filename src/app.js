const express = require("express");
const mongoose = require("mongoose")
require("./db/conn");
const Movie = require("./models/movie");

const app = express();
const port = process.env.PORT || 8000 ;

app.get("/", (req,res) => {
    try{
        const movie = movie.find()
        res.json(movie)
    }catch(e){
        res.send(e);
    }
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
    
})
app.listen(port, () => {
    console.log(`connection setup ${port}`);

})
app.patch("/name", (req,res) => {
    try{
        const name = Movie.findBy(req.params)
        movie.sub = req.body.sub
        const o = movie.save()
        res.json(o)
    }catch(e) {
        res.send(e);
    }
})
