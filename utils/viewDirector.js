import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import client from './client';
import startApp from './startApp';
import clearDom from './clearDom';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn('user logged in');
      // eslint-disable-next-line no-console
      console.info(user);
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
      clearDom();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
