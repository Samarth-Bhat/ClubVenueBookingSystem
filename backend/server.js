const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const registrationRoutes = require("./routes/registrationRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/clubReg", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cors());

// Use the routes
app.use("/reg", registrationRoutes);
app.use("/event", eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
