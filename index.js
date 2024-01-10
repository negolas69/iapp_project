import express from "express";
import { router as notesRouter } from "./backend/notes/notes.routes.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/notes");

app.use(express.static("frontend"));
app.use(express.json());

app.use("/api/notes", notesRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(3001, () => {
    console.log("Server listens to http://127.0.0.1:3001");
  });
});
