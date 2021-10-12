const express = require('express');
const cors = require("cors");

const app = express();
// app.use('/', userRouter);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// app.use("/menu",menuRouter);


module.exports = app;