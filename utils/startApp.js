import { getEntry } from '../api/entryData';
import domBuilder from '../components/domBuilder';
import domEvents from '../components/domEvents';
import formEvents from '../components/forms/formEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navbar';
import navigationEvents from '../components/navigationEvents';
import { emptyEntries, showEntries } from '../pages/entries';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar(user);
  logoutButton(user);
  navigationEvents(user);
  getEntry(user.uid).then((entries) => {
    if (entries.length > 0) {
      getEntry(`${user.uid}`).then(showEntries);
    } else {
      emptyEntries();
    }
  });
};

export default startApp;
