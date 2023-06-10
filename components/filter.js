import renderToDom from '../utils/renderToDom';
import { getEntry } from '../api/entryData';

const filterEntries = (entries, language) => {
  const filteredEntries = entries.filter((entry) => entry.language === language);
  return filteredEntries;
};

const showEntries = (entries) => {
  let domString = '';
  Array.from(entries).forEach((item) => {
    domString
    += `<div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.language}</p>
        <p class="card-text">${item.definition}</p>
        <hr>
        <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-entry--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
  });
  renderToDom('#entries', domString);
};

const filterButton = () => {
  const domString = `<div id="filters">
    <div class="d-flex justify-content-evenly filter-btns" id="filter-buttons">
      <button id="python" type="button" class="btn btn-outline-light">Python</button>
      <button id="javaScript" type="button" class="btn btn-outline-light">JavaScript</button>
      <button id="c#" type="button" class="btn btn-outline-light">C#</button>
    </div>
    
  `;
  renderToDom('#filters', domString);

  // Attach event listeners
  document.getElementById('python').addEventListener('click', () => {
    getEntry('7puFHNGTFcarUoJ2cMwbdMJLIMG3').then((entries) => {
      const filteredEntries = filterEntries(entries, 'python');
      showEntries(filteredEntries);
    });
  });

  document.getElementById('javaScript').addEventListener('click', () => {
    getEntry('7puFHNGTFcarUoJ2cMwbdMJLIMG3').then((entries) => {
      const filteredEntries = filterEntries(entries, 'javaScript');
      showEntries(filteredEntries);
    });
  });

  document.getElementById('c#').addEventListener('click', () => {
    getEntry('7puFHNGTFcarUoJ2cMwbdMJLIMG3').then((entries) => {
      const filteredEntries = filterEntries(entries, 'c#');
      showEntries(filteredEntries);
    });
  });
};

export default filterButton;
