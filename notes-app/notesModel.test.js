const NotesModel = require('./notesModel.js')

describe('notes can be added or removed', () => {
    test('returns a note when added', () => {
        const note = new NotesModel();

        note.addNote('Get milk');
        expect(note.getNotes()).toEqual(['Get milk']);
  });
  
    test('returns multiple notes when added', () => {
        const note = new NotesModel();

        note.addNote('Get milk');
        note.addNote('Go to the gym');
        expect(note.getNotes()).toEqual(['Get milk', 'Go to the gym']);
  });

    test('removes all notes when reset', () => {
        const note = new NotesModel();

        note.addNote('Get milk');
        note.reset();
        expect(note.getNotes()).toEqual([]);
  });
});