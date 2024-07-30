const projetos = document.getElementById("project__container-list");

function getIdUser() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id;
}
/**
 *
 * @param {number} id Codigo id do parametro que é passado quando é realizado login com sucesso
 * @param {boolean} validateLogin Verificação se o operador realizou login no sistema.
 */
async function getInfoUser() {
  const infoUser = await userApi.getUser(getIdUser());
  //console.log(infoUser)
  return infoUser;
}

function getInfoProject(id) {
  apiProject.getInfoProject(id).then((response = []) => {
    const projetosCarregados = response.map(loadProjects).join("");
    projetos.innerHTML += projetosCarregados;
  });
}

function loadProjects(projects) {
  const listItem =
  `
          <li class="project__container-list-item">
            <div class="project__container-item">
              <div class="project__header">
                <div class="project__header-id">
                  <input type="checkbox" name="project-checkbox" id="projectId" value="${projects.id}"/>
                  <button data-action='editProject' class="button-with-icon editBtn" value=${projects.id}>
                  </button>
                </div>
                <div class="project__header-info">
                  <span id="title-project${projects.id}">${projects.titulo}</span>
                </div>
              </div>
              <div class="project__detail">
                <textarea name="detail_project" id="project-detail${projects.id}">
                ${projects.descricao}
                </textarea>
              </div>
                <span id="date-project${projects.id}">${projects.date}</span>
            </div>
          </li>`;
  return listItem;
}

function loginValidate() {
  const user = userApi.getUser();
  const validateLogin = params.get("validate");
  const nomeOperador = document.getElementById("nav-name-profile");

  if (!validateLogin) {
    window.location.href = "../pages/login.html";
  } else {
    nomeOperador.innerHTML = user.nome;
  }
}

//Executar o carregamento das informações do usuario.
getInfoUser();
getInfoProject(getIdUser());
