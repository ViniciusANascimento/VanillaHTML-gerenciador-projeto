const userApi = {};

//URL da API para realizar LOGIN.
userApi.url = `https://trilhafullstackjr-jun15-production-04db.up.railway.app/`;
//userApi.url = `http://localhost:8080/`;

userApi.efetuarLogin = async (email, password) => {

  const urlLogin = userApi.url + `auth/`;
  /**
   *
   * @param {string} email Email do usuario
   * @param {string} password Senha do usuario
   * @returns {User} retorna usuario do sistema
   */
  async function fetchPostLogin(email, password) {
    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //transforma o body em um JSON para a API
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const usersAPI = await response.json();
      return converterUserAPiToUserForm(usersAPI);
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  return await fetchPostLogin(email, password);
};

function converterUserAPiToUserForm(usuarioProjeto) {
  const novoUsuario = new User();
  novoUsuario.id  = usuarioProjeto.id;
  novoUsuario.nome = usuarioProjeto.username;
  novoUsuario.email = usuarioProjeto.email;
  return novoUsuario;
}

async function convertProjectUser(userProject){
  const title = userProject.titulo
  const date = userProject.date
  const descript = userProject.descricao
  const id = userProject.id;
}
userApi.getUser = async(id) =>{
  const urlUser = userApi.url + `users/${id}`;
  async function getDataUsers(){
    try{
      const response = await fetch(urlUser)
      const responsAPI = await response.json()
      const novoUser = converterUserAPiToUserForm(responsAPI)
      return novoUser;
    }catch(err){
      console.error(`Erro: ${err}`)
    }
  }
  return await getDataUsers();
}

userApi.createNewUser = async(userName,password,email) =>{
  const urlLogin = userApi.url + 'users'
  //console.log(urlLogin)
  async function postUser(userName,password,email){
    try{
      const response = await fetch(urlLogin,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          username: userName,
          password: password,
          email: email,
        }),
      });
      console.log(response)
      return response;
    }catch(err){
      console.error(err)
      console.log('Deu erro')
    }
  }
  return await postUser(userName,password,email)
}

userApi.recoveryUser = async(email) =>{
  const urlRecovery = userApi.url + `auth/${email}`
  async function recovery (){
    try{
      const response = await fetch(urlRecovery);
      const responseApi = await response.json();
      return responseApi;
    }catch(err){
      console.error(err);
    }
  }
  return await recovery()
}
