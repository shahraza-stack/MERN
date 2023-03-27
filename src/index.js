const express = require("express"); //lib call
const app = express(); //app create
const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoutes");

const mongoose = require("mongoose");
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Helo sending response");
});
app.get("/quotes", (req, res) => {
  res.status(200).json(quotes);
});

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.mej9q2y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started at port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// app.get("/random", (req, res) => {
//   let index = Math.floor(Math.random() * quotes.length);
//   let quote = quotes[index];
//   res.status(200).json(quote);
// });
