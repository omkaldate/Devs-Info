const mongoose = require("mongoose");

const url = `mongodb+srv://omkaldate23:Omkaldate%405152@cluster0.pqmcuzp.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log("db not connected"));