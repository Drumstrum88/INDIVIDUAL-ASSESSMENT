import { getEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#home-btn').addEventListener('click', () => {
    getEntry(user.uid).then(showEntries);
  });

  document.querySelector('#filters').addEventListener('click', (e) => {
    const language = e.target.id;
    getEntry(user.uid).then((entries) => {
      const filteredEntries = entries.filter((entry) => entry.language === language);
      showEntries(filteredEntries);
    });
  });
};

export default navigationEvents;
