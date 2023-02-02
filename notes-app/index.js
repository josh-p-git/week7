const NotesModel = require('./notesModel.js')

const notes = new NotesModel;

console.log('The notes app is running');
console.log(notes.getNotes());