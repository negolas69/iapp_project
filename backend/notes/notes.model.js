import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Note = mongoose.model("Note", notesSchema);

export { Note };
