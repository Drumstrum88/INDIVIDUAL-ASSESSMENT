import renderToDom from '../utils/renderToDom';

const filterButton = () => {
  const domString = `
    <div class="d-flex justify-content-evenly filter-btns" id="filter-buttons">
      <button id="python" type="button" class="btn btn-outline-light">Python</button>
      <button id="javaScript" type="button" class="btn btn-outline-light">JavaScript</button>
      <button id="c#" type="button" class="btn btn-outline-light">C#</button>
    </div>
  `;
  renderToDom('#filters', domString);
};

export default filterButton;
