class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.inputEl = document.querySelector('#message-input');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    let message = document.createElement("div");
    message.id = 'message';
    message.innerText = this.inputEl.value;
    this.mainContainerEl.append(message);
  }

  hideMessage(){
    const list = document.getElementById('message');
    list.remove();
  }
}

module.exports = MessageView;