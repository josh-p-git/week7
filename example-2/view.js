class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let para = document.createElement("p");
    para.textContent = ('This paragraph has been dynamically added by JavaScript!');
    this.mainContainerEl.append(para);
  }

  clearParagraphs() {
    this.mainContainerEl.remove();
  }
}

module.exports = View;