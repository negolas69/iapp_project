import { notesService } from "./notes.js"; // Update with correct path

const getNotes = async () => {
  const notes = await notesService.getAll();
  // Code to display notes on the page goes here
};

const createNote = async (title, description) => {
  const note = { title, description };
  await notesService.create(note);
  await displayNotes();
};

const updateNote = async (id, title, description) => {
  const note = { title, description };
  await notesService.update(id, note);
  await displayNotes();
};

const deleteNote = async (id) => {
  await notesService.remove(id);
  await displayNotes();
};

export { getNotes, createNote, updateNote, deleteNote };
