const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const port = process.env.PORT;

const allowedOrigins = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
};


app.use(cors(allowedOrigins));

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));


const orders = require("./routes/orders")


app.use("/",orders)


app.listen(port, () => {
  console.log("Server is listening to " + port);
});
