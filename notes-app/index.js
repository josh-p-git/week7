const NotesView = require('./notesView.js');
const NotesModel = require('./notesModel.js');

const model = new NotesModel();
model.addNote('This is an example note');
const notes = new NotesView(model);
notes.displayNotes();

console.log('The notes app is running');