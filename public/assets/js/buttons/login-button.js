// Eventos para botoes de acessar a conta, cadastrar ou recuperar senha.
document
  .getElementById("createAccountBtn")
  .addEventListener("click", function () {
    document.querySelector(".container__main").style.display = "none";
    document.querySelector(".container__recovery").style.display = "none";
    document.querySelector(".container__signup").style.display = "flex";
  });

document
  .getElementById("backToLoginBtn")
  .addEventListener("click", function () {
    document.querySelector(".container__signup").style.display = "none";
    document.querySelector(".container__recovery").style.display = "none";
    document.querySelector(".container__main").style.display = "flex";
  });

document
  .getElementById("backToLoginBtn2")
  .addEventListener("click", function () {
    document.querySelector(".container__signup").style.display = "none";
    document.querySelector(".container__recovery").style.display = "none";
    document.querySelector(".container__main").style.display = "flex";
  });

document
  .getElementById("recoveryAccountBtn")
  .addEventListener("click", function () {
    document.querySelector(".container__signup").style.display = "none";
    document.querySelector(".container__main").style.display = "none";
    document.querySelector(".container__recovery").style.display = "flex";
  });


// Evento para enviar as informações de login para o servidor.

const formLogin = document.getElementById("login-form");
formLogin.addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  //Fazer a função esperar a sincronia para carregar a mensagem de alerta.
  try {
    const novoUsuario = await userApi.efetuarLogin(email, password);
    alert(`Bem vindo ${novoUsuario.nome}`);
    window.location.href = `../pages/main.html?id=${novoUsuario.id}&validate=true`;
  } catch (err) {
    console.error(err);
    alert(`Falha no Login, favor verificar informações.`);
  }
});
