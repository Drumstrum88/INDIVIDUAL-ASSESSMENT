import { deleteEntry, getEntry, getSingleEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';
import addEntryForm from './forms/addEntryForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', async (e) => {
    // delete entry
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ENTRY', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then(() => {
          getEntry(`${user.uid}`).then(showEntries);
        });
      }
    }
    // // Click event to create an entry
    if (e.target.id.includes('add-entry-btn')) {
      console.warn('CLICKED CREATE ENTRY', e.target.id);
      addEntryForm();
    }
    // Click event to edit an entry
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj));
    }
  });
};

export default domEvents;
