import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="logoutbutton" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#logoutbutton').addEventListener('click', signOut);
};

export default logoutButton;
