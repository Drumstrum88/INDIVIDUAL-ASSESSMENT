import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addEntryForm = () => {
  clearDom();
  const domString = `
    <div class="modal fade show" id="addEntryModal" tabindex="-1" aria-labelledby="addEntryModalLabel" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addEntryModalLabel">Add Entry</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="formTitle" class="form-label">Name</label>
                <input type="text" class="form-control" id="formTitle" aria-describedby="nameHelp" value="">
              </div>
              <div class="mb-3">
                <label for="formDefinition" class="form-label">Description</label>
                <input type="text" class="form-control" id="formDefinition" value="">
              </div>
              <div class="mb-3">
                <label for="formLanguage" class="form-label">Language</label>
                <input type="text" class="form-control" id="formLanguage" value="">
              </div>
              <button type="submit" id="submit-entry" class="btn btn-primary">Submit</button>
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
