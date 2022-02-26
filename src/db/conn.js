const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/restfulapin", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected")

}).catch((e) => {
    console.log("no connection");

})
