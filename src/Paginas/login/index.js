import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Login() {
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            // o usuário foi autenticado com sucesso
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            // ocorreu um erro ao autenticar o usuário
            console.log(error);
          });
      };

  return (
    <button onClick={signInWithGoogle}>Entrar com o Google</button>
  );
}

export default Login;
