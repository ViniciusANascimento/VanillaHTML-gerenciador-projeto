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

//Evento para criar novo usuario.
const formUserCreate = document.getElementById('user-create');
formUserCreate.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const userName = document.getElementById('new-userName').value
  const userEmail= document.getElementById('new-userEmail').value
  const userPassword = document.getElementById('new-userPassword').value

  try{
    const newUser = await userApi.createNewUser(userName,userPassword,userEmail)
    if(newUser.status >= '200' && newUser.status <= '299'){
      alert('Usuário criado com sucesso.')
    }else if(newUser.status > '400' && newUser.status < '499'){
      alert('Não foi possivel criar usuário, email ja existente em outro usuário.')
    }else{
      alert('Ocorreu erro ao tentar criar usuário.')
    }
  }catch(err){
    console.error(err)
    alert('Falha ao cadastrar, favor tentar novamente.')
  }
})

//Evento para recuperar a senha do usuario.
const formRecoveryUser = document.getElementById('user-Recovery');
formRecoveryUser.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const emailRec = document.getElementById('recEmail').value
  //console.log(emailRec)
  try{
    const recoveryResponse = await userApi.recoveryUser(emailRec);
    const labelPassword = document.getElementById('recoveryPassword');
    alert(`Sua senha é "${recoveryResponse.password}", Por favor retorne e entre no sistema.`)
  }catch(err){
    console.error(err)
  }
})
