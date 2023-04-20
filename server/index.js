import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT | 5000;

const URL = process.env.MONGO_DB;
mongoose
  .connect(URL, {})
  .then(() => {
    console.log("Base de Datos conectada");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Servidor escuchando en puerto", PORT);
});
