// import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#entries', domString);
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

// domString += '</div>';

export { emptyEntries, showEntries };
