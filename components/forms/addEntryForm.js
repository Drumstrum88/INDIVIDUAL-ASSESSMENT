import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addEntryForm = (obj = {}) => {
  clearDom();
  const domString = `
<form>
  <div class="mb-3">
    <label for="formName" class="form-label">Name</label>
    <input type="text" class="form-control" id="formName" aria-describedby="nameHelp" value="${obj.name || ''}">
    </div>
    <div class="mb-3">
    <label for="formDefinition" class="form-label">Description</label>
    <input type="text" class="form-control" id="formDefinition" value="${obj.definition || ''}">
    </div>
    <div class="mb-3">
    <label for="formLanguage" class="form-label">Language</label>
    <input type="text" class="form-control" id="formLanguage" value="${obj.language || ''}">
    </div>`;
  renderToDom('#form-container', domString);
};

export default addEntryForm;
