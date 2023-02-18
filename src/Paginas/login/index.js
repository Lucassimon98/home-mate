<button onClick={signInWithGoogle}>Entrar com o Google</button>

// defina a função de login com o provedor de login do Google
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
