import { Note } from "./notes.model.js"; // Importiere das Mongoose-Modell

// Erstelle das Mongoose-Modell für Notizen

const getNotes = async () => {
  try {
    const notes = await Note.find(); // Verwende das Mongoose-Modell
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = ""; // Clear the existing list

    if (notes.length === 0) {
      notesList.innerHTML = "<p>No notes available.</p>";
    } else {
      notes.forEach((note) => {
        const listItem = createNoteListItem(note);
        notesList.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error("Error displaying notes:", error);
  }
};

// Funktion, um ein Notiz-Element für die Anzeige zu erstellen
const createNoteListItem = (note) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.description}</p>
    <button onclick="editNote('${note._id}', '${note.title}', '${note.description}')">Edit</button>
    <button onclick="deleteNote('${note._id}')">Delete</button>
  `;
  return listItem;
};

// Funktion zum Erstellen einer neuen Notiz
const createNote = async (title, description) => {
  try {
    const note = { title, description };
    await notesService.create(note);
    await getNotes(); // Aktualisiere die Anzeige nach dem Hinzufügen
  } catch (error) {
    console.error("Error adding note:", error);
  }
};

// Funktion zum Aktualisieren einer Notiz
const updateNote = async (id, title, description) => {
  try {
    const note = { title, description };
    await notesService.update(id, note);
    await getNotes(); // Aktualisiere die Anzeige nach der Aktualisierung
  } catch (error) {
    console.error("Error updating note:", error);
  }
};

// Funktion zum Löschen einer Notiz
const deleteNote = async (id) => {
  try {
    await notesService.remove(id);
    await getNotes(); // Aktualisiere die Anzeige nach dem Löschen
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};

// Funktion zum Vorbereiten des Bearbeitungsformulars (kann separat implementiert werden)
const editNote = (id, title, description) => {
  // Implementiere deine Logik, um das Formular für die Bearbeitung vorzubereiten
  // Zum Beispiel: Fülle die Formularfelder mit den ausgewählten Notizen
  document.getElementById("noteTitle").value = title;
  document.getElementById("noteDescription").value = description;
  // Möglicherweise möchtest du auch ein verstecktes Eingabefeld einrichten, um die ID der Notiz zu speichern.
  // Beispiel: document.getElementById("noteId").value = id;
};

// Exportiere die Funktionen, damit sie in anderen Modulen verwendet werden können
export { createNote, updateNote, deleteNote, getNotes, editNote };
