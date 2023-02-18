import firebase from 'firebase/app';
import 'firebase/auth';

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
