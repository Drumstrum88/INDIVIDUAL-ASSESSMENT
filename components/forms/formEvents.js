import { createEntry, getEntry, updateEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', async (e) => {
    e.preventDefault();
    // Click event for submitting an entry
    if (e.target.id.includes('submit-entry')) {
      console.warn('CLICKED SUBMIT ENTRY', e.target.id);
      const newEntryPayload = {
        title: document.querySelector('#formName').value,
        definition: document.querySelector('#formDefinition').value,
        language: document.querySelector('#formLanguage').value,
        uid: `${user.uid}`,
      };
      createEntry(newEntryPayload).then((entryArray) => showEntries(entryArray));
    }

    // Click event for editing an entry
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED EDIT ENTRY', firebaseKey);
      const updateEntryPayload = {
        firebaseKey,
        title: document.querySelector('#formName').value,
        definition: document.querySelector('#formDefinition').value,
        language: document.querySelector('#formLanguage').value,
        uid: user.uid
      };
      updateEntry(updateEntryPayload).then(() => {
        getEntry(`${user.uid}`).then(showEntries);
      });
    }
  });
};

export default formEvents;
