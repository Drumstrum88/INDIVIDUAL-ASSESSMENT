import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addEntryForm = () => {
  clearDom();
  const domString = `
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
    <button type="submit" id="submit-entry" class="btn btn-primary">Submit</button>`;
  renderToDom('#form-container', domString);
};

export default addEntryForm;
