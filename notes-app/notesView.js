class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        this.buttonEl = document.querySelector('#add-message-button');
        this.inputEl = document.querySelector('#message-input');

        this.buttonEl.addEventListener('click', () => {
            const newNote = this.inputEl.value;
            this.addNewNote(newNote);
        });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

    displayNotes() {

        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        });
        
        const notes = this.model.getNotes()

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        })

        this.inputEl.value = "";
    }    
};

module.exports = NotesView;