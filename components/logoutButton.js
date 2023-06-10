// import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="leave" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  // document.querySelector('#logout-button').addEventListener('click', signOut);
};

export default logoutButton;
