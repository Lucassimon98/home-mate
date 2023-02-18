firebase.initializeApp(app);

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Login() {
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <button onClick={loginWithGoogle}>Entrar com o Google</button>
  );
}

export default Login;
