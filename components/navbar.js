import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domstring = `<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
    <div class="container">
      <a class="navbar-brand" href="#">Vocab-YOU-lary</a>
  
      <div class="navbar-nav ml-auto">
        <button id="submit-entry" class="btn btn-primary mr-2">Add Entry</button>
      </div>
    </div>
  </nav>
  `;

  renderToDom('#navigation', domstring);
};

export default navBar;
