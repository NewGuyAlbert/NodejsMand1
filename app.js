const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/:name", (req, res) => {
    res.sendFile(__dirname + `/public/html/template.html`);
});

const server = app.listen(3000, (error) => {
    if(error){
        console.log("Error starting the app");
    }
    console.log("App running on port 3000");
});