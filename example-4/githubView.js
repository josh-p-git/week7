class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display(repoData);
      });      
    });    
  }

  display() {
    const data = this.model.getRepoInfo();
    const name = document.querySelector('#repo-name');
    const description = document.querySelector('#repo-description');
    const image = document.querySelector("#repo-image");

    name.textContent = data.name;
    description.textContent = data.description;
    image.src = data.organization.avatar_url;
  }
}

module.exports = GithubView;