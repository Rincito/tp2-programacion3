import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dbconnect from "./mongo.js";
import ModelHistorial from "./historialSchema.js";

const app = express()
app.use(cors());
app.use(bodyParser.json());

dbconnect();

app.post('/api/History', async (req, res) => {
    try {
      const newSearch = new ModelHistorial(req.body);
      await newSearch.save();
      res.status(201).send(newSearch);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
