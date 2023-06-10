import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domstring = `<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
    <div class="container">
      <a class="navbar-brand" href="#"><b><u>Welcome to Jared's Vocab-YOU-lary APP!</u></b></a>
      <button id="home-btn" class="btn btn-outline-success me-2" type="button">Home</button>
      <div class="navbar-nav ml-auto">
        <button id="add-entry-btn" class="btn btn-primary mr-2">Add Entry</button>
      </div>
    </div>
  </nav>
  `;

  renderToDom('#navigation', domstring);
};

export default navBar;
