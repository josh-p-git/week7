/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');
    
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    const input = document.querySelector('#message-input');
    input.value = 'My test message';
  
    const button = document.querySelector('#add-message-button');
    button.click();
  
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My test message');
  });


it('clear the list of previous notes before displaying', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);
  model.addNote('one');
  model.addNote('two');

  view.displayNotes();
  view.displayNotes();

  expect(document.querySelectorAll('div.note').length).toEqual(2);
});
});