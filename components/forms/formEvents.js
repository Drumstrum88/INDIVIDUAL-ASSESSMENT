import { createEntry, getEntry, updateEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';
import navBar from '../navbar';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Click event for submitting an entry
    if (e.target.id.includes('submit-entry')) {
      console.warn('CLICKED SUBMIT ENTRY', e.target.id);
      const newEntryPayload = {
        title: document.querySelector('#formTitle').value,
        definition: document.querySelector('#formDefinition').value,
        language: document.querySelector('#formLanguage').value,
        uid: `${user.uid}`,
        date: new Date()
      };
      console.warn(newEntryPayload);
      createEntry(newEntryPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntry(`${user.uid}`).then(showEntries);
          navBar();
        });
      });
    }

    // Click event for editing an entry
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED EDIT ENTRY', firebaseKey);
      const updateEntryPayload = {
        title: document.querySelector('#formName').value,
        definition: document.querySelector('#formDefinition').value,
        language: document.querySelector('#formLanguage').value,
        firebaseKey,
      };
      updateEntry(updateEntryPayload).then(() => {
        getEntry(`${user.uid}`).then(showEntries);
      });
    }
  });
};

export default formEvents;
