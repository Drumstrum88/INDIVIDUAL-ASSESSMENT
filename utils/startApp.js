import { getEntry } from '../api/entryData';
import domBuilder from '../components/domBuilder';
import domEvents from '../components/domEvents';
import formEvents from '../components/forms/formEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navbar';
import navigationEvents from '../components/navigationEvents';
import { emptyEntries, showEntries } from '../pages/entries';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getEntry(user.uid).then((entries) => {
    if (entries.length > 0) {
      showEntries(entries);
    } else {
      emptyEntries();
    }
  });
};

export default startApp;
