import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logoutbutton')
    .addEventListener('click', signOut);
};

export default navigationEvents;
