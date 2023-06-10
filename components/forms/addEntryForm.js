// import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addEntryForm = (obj = {}) => {
  const domString = `<div class="modal fade show" id="addEntryModal" tabindex="-1" aria-labelledby="addEntryModalLabel" aria-modal="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addEntryModalLabel">Add Entry</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <form id="${obj.firebaseKey ? `edit-entry--${obj.firebaseKey}` : 'submit-entry'}">
  <div class="mb-3">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="formTitle" aria-describedby="cardHelp" placeholder="Card Title" value="${obj.title || ''}" required>
  </div>
  <div class="mb-3">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Card Definition" id="formDefinition" style="height: 150px" value="${obj.definition || ''}" required></textarea>
  </div>
  <select id="formLanguage" class="form-select" aria-label="Default select example">
    <option selected>Pick A Language</option>Python</option>
    <option value="c#" ${obj.language ? 'checked' : ''}>C#</option>
    <option value="javascript" ${obj.language ? 'checked' : ''}>Javascript</option>
  </select>
  <button id="submit-card" type="submit" class="btn btn-outline-light me-2 submit-btn">Submit</button>
</form>
</div>
</div>
</div>
</div>`;

  renderToDom('#form-container', domString);
  // Open the modal immediately
  // eslint-disable-next-line no-undef
  const addEntryModal = new bootstrap.Modal(document.getElementById('addEntryModal'));
  addEntryModal.show();
};

export default addEntryForm;
