const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const app = express();

const port = process.env.PORT || 3333;
app.use(express.json);

app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});