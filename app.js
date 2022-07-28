const express = require('express');
const app = express();


app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/product", function (req, res) {
    res.sendFile(__dirname + "/product.html");
});



app.listen(process.env.PORT || 3000, function () {
    console.log("Server started");
});