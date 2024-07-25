//URL da API para realizar LOGIN.
const urlLogin = `https://trilhafullstackjr-jun15-production-04db.up.railway.app/auth/{login}`;
let retornPost;
/**
* A Função fetchPostLogin recebe dois paramentros para verificar se o login esta correto.
*@param {string} email do usuario
*@param {string} password do usuario estará utilizando.
*@returns {text} irá retornar uma mensagem indicando se o acesso foi liberado.
*/
async function fetchPostLogin(email,password) {
  try {
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //transforma o body em um JSON para a API
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
    //Espera o retorno da mensagem da api para receber o texto.
    const text = await response.text();

    // Tenta parsear a resposta como JSON
    try {
      const data = JSON.parse(text);
      console.log(data);
      retornPost = data; // Atribui o resultado à variável global
    } catch (error) {
      console.log(text); // Exibe o texto diretamente se não for JSON
      retornPost = text; // Atribui o texto à variável global
  }

  } catch (error) {
    console.error('Erro:', error);
  }
}

const formLogin = document.getElementById("login-form");
/**
 * Função para verificar o acesso do usuario esta liberado.
 */
function verificarAcesso(){
  if(retornPost === "Acesso Liberadoo"){
    window.location.href = "../pages/main.html";
  }else{
    window.location.reload();
  }
}

formLogin.addEventListener('submit',async function(event){
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  //Fazer a função esperar a sincronia para carregar a mensagem de alerta.
  await fetchPostLogin(email,password);
  alert(retornPost);
  verificarAcesso();
})
