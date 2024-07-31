const projetos = document.getElementById("project__container-list");
const params = new URLSearchParams(window.location.search);

function getIdUser() {
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
  return infoUser;
}

function getInfoProject() {
  apiProject.getInfoProject(getIdUser()).then((response = []) => {
    const projetosCarregados = response.map(loadProjects).join("");
    projetos.innerHTML += projetosCarregados;
  });
}

function loadProjects(projects) {
  const date = projects.date;
  const dateTrunc = date.substring(0,10)
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
                <textarea name="detail_project" id="project-detail${projects.id}" rows="5" cols="33" disabled>
                ${projects.descricao.trim()}
                </textarea>
              </div>
              <div class="project__header-info-date">
                <span class="date-project-trunc">${dateTrunc}</span>
                <span id="date-project${projects.id}" style="display: none;">${projects.date}</span>
              </div>
            </div>
          </li>`;
  return listItem;
}

async function loginValidate() {
  const user = await getInfoUser();
  const validateLogin = params.get("validate");
  console.log(validateLogin === 'true')
  if (validateLogin === 'true') {
    const nomeOperador = document.getElementById("nav-name-profile");
    nomeOperador.innerHTML = user.nome;
    getInfoProject()
  } else {
    window.location.href = "../pages/login.html";
  }
}

//Executar o carregamento das informações do usuario.
getInfoUser();
loginValidate()
//getInfoProject();
