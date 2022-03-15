require('dotenv').config();
import express from "express";

import player from "./routes/player";

const app = express();

//json config
app.use(express.json());

//using only player router for testing
app.use(player);

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
})