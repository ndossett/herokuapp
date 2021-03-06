const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000; // if no env variable, then whatever you set will be default backup port

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build", "index.html")))

app.use("/api/*", (_, res) => {
    res.json({data: "The API lives!!!"})
})

app.listen(port, () => {
    console.log(`Server is alive on port ${port}`)
})










// console.log("It's alive!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.PORT);
// console.log(dotenv);
// console.log(process.env.FOOD);