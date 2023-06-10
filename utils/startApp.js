import { getEntry } from '../api/entryData';
import domBuilder from '../components/domBuilder';
import domEvents from '../components/domEvents';
import formEvents from '../components/forms/formEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navbar';
import navigationEvents from '../components/navigationEvents';
import { showEntries } from '../pages/entries';

const startApp = (user) => {
  domBuilder();
  formEvents(user);
  navBar();
  domEvents(user);
  navigationEvents(user);
  logoutButton();

  getEntry(user.uid).then((entries) => showEntries(entries));
};

export default startApp;
