//Uso o span&times como botão para fechar o modal.
const closeModalNewProject = document.getElementsByClassName("close-modal")[0];
// Verifico qual item da lista que teve o checkbox alterado.
const listaEvento = [];

//Abrir o modal para adicionar novo projeto.
document.getElementById("button-add").addEventListener("click", function () {
  document.getElementById("modal__new-project").style.display = "block";
});

//Fechar modal do novo projeto.
closeModalNewProject.addEventListener("click", function () {
  document.getElementById("modal__new-project").style.display = "none";
});

//cadastrar novo projeto ao sistema.
document
  .getElementById("btn-add-new")
  .addEventListener("click", async function () {
    const newTitle = document.getElementById("title-new-project").value;
    const newDescript = document.getElementById("text-new-project").value;
    const idUser = await getInfoUser();
    const response = await apiProject.postProject(
      idUser.id,
      newTitle,
      newDescript
    );
    console.log(response);
    if (response) {
      alert("Projeto cadastrado.");
      window.location.reload();
    } else {
      alert("Projeto não cadastrado !!");
    }
  });

//modal edit projto
function modalEditProject(title, date, description) {
  return `<div class="modal-content">
          <span class="close-modal">&times;</span>
          <div class="modal-content-header modal-container">
            <h2>Editando projeto</h2>
            <div class="modal-content-title modal-container">
              <label for="title">Titulo</label>
              <input
                type="text"
                id="title-edit-project"
                value=${title}
              />
              <span id="date-edit-project">${date}</span>
            </div>
            <div class="modal-content-text modal-container">
              <span>Descrição </span>
              <textarea id="text-edit-project">
                ${description}
              </textarea>
            </div>
            <div class="btn-new-Project modal-container">
              <button id="btn-put-project">Atualizar Projeto</button>
            </div>
          </div>
        </div>
      </section>`;
}

//realizar a exclusão dos projetos.
document.getElementById("button-delete").addEventListener("click", function () {
  if (listaEvento.length === 0) {
    alert("Por favor selecione os projetos que vão ser excluidos.");
  } else {
    const promises = listaEvento.map((indexItem) => {
      return apiProject
        .deleteProject(indexItem)
        .then((data) => console.log(data));
    });

    Promise.all(promises)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao deletar projetos:", error);
      });
  }
});

//Carrego os itens da lista.
const item = document.getElementById("project__container-list");
//função de marcar e desmarcar no checkbox.
item.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log(`Projeto ${e.target.value} marcado`);
    listaEvento.push(e.target.value);
  } else {
    console.log(`Projeto ${e.target.value} desmarcado`);
    const indexItem = listaEvento.findIndex((index) => index == e.target.value);
    //Removo da lista somente o item que foi desmarcado.
    listaEvento.splice(indexItem, 1);
  }
});

//evento para quando clicar no botão de editar.
item.addEventListener("click", (e) => {
  // console.log(e.target.value)
  // const s = e.target.dataset.value;
  const action = e.target.dataset.action;
  //console.log(action)
  if (action === "editProject") {
    // console.log(`finalmente sasas + ${s}`)
    console.log(`Editando projeto = ${e.target.value}`);

    //carregar as informações do projeto selecionado.
    modalEdit(e.target.value);

    //console.log(dataProject)
    //exibir o modal
    document.getElementById("modal__edit-project").style.display = "block";


    //Apos carregar o modal, carrego os eventos de atualização das informações.

    const newText = document.getElementById('text-edit-project')
    const newTitle = document.getElementById('title-edit-project')
    const newDate = document.getElementById('date-edit-project')

    let novoTexto = newText.value;
    let novoTitulo = newTitle.value

    newText.addEventListener('input',()=>{
      novoTexto = newText.value;
    })

    newTitle.addEventListener('input',() =>{
      novoTitulo = newTitle.value
    })

    const putBtn = document.getElementById("btn-put-project");

    putBtn.addEventListener("click", async() => {

      await putBtn.addEventListener('click', async() => {
        const id  = getIdUser()
        const idp = e.target.value

        //const newInfo = dataProject();
        await apiProject.putProject(
          idp,
          id,
          novoTitulo,
          newDate.innerHTML,
          novoTexto
        );
      });

    });


  }
});

function modalEdit(idProject) {
  const modalEdit = document.getElementById("modal__edit-project");
  const editTitle = document.getElementById(
    `title-project${idProject}`
  ).innerHTML;

  console.log(editTitle)

  const editData = document.getElementById(
    `date-project${idProject}`
  ).innerHTML;
  const editDescript = document.getElementById(
    `project-detail${idProject}`
  ).innerHTML;
  //carregar as informações do modal com os textos ja preenchidos.
  const loadModal = modalEditProject(editTitle, editData, editDescript.trim());
  modalEdit.innerHTML += loadModal;

  return {
    titulo: editTitle,
    data: editData,
    descricao: editDescript
  }
}
