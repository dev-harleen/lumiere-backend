require('dotenv').config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//const dbURI = process.env.DB_URI; // Use process.env to access variables loaded from .env
const dbURI = "mongodb+srv://wmdd4980digibuds:rKRwp1nbsfjcOvG7@lumiere.mwbezex.mongodb.net/Lumiere?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});