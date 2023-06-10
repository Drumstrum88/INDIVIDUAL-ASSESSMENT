import { getEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#leave').addEventListener('click', signOut);

  document.querySelector('#home-btn').addEventListener('click', () => {
    getEntry(user.uid).then(showEntries);
  });

  // FILTER BUTTONS
  const filterButtons = document.querySelectorAll('.filter-btns button');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.id;
      getEntry(user.uid).then((entries) => {
        const filteredEntries = entries.filter((entry) => entry.language === language);
        showEntries(filteredEntries);
      });
    });
  });
};

export default navigationEvents;
