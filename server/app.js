require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED !!");
  });

//Middlewares
app.use(express.json());
app.use(cors());

//my routes
const studentRoutes = require("./routes/student");
app.use("/api", studentRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
