import renderToDom from '../utils/renderToDom';

const filterButton = () => {
  const domString = `<div id="filters">
    <div class="d-flex justify-content-evenly filter-btns" id="filter-buttons">
      <button id="Python" type="button" class="btn btn-outline-light">Python</button>
      <button id="JavaScript" type="button" class="btn btn-outline-light">JavaScript</button>
      <button id="C#" type="button" class="btn btn-outline-light">C#</button>
    </div>
    
  `;
  renderToDom('#filters', domString);
};

export default filterButton;
