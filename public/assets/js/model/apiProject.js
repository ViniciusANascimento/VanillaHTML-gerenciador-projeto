const apiProject = {};
apiProject.url = `https://trilhafullstackjr-jun15-production-04db.up.railway.app/`;
//apiProject.url = `http://localhost:8080/`;

//carregar os projetos.
apiProject.getInfoProject = async (idUser) => {
  const urlProject = apiProject.url + `project/${idUser}`;
  async function getProjectUser() {
    try {
      const response = await fetch(urlProject);
      const responseAPI = await response.json();
      return responseAPI;
    } catch (err) {
      console.error(`Erro: ${err}`);
    }
  }
  return await getProjectUser();
};

//criar projeto
apiProject.postProject = async (userID, titleProject, descriptProject) => {
  const urlProject = apiProject.url + `project`;

  async function postProjectUser(userID, titleProject, descriptProject) {
    try {
      const response = await fetch(urlProject, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //transforma o body em um JSON para a API
        body: JSON.stringify({
          userID: userID,
          titulo: titleProject,
          descricao: descriptProject,
          date: "1999-01-01T16:29:35.892Z",
        }),
      });
      //console.log(response.body())
      const projectAPI = await response.json();
      return projectAPI;
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  return await postProjectUser(userID, titleProject, descriptProject);
};

//apagar projeto
apiProject.deleteProject = async (idProject) => {
  const urlProject = apiProject.url + `project/${idProject}`;
  async function deleteProjectUser() {
    try {
      const response = await fetch(urlProject, {
        method: "DELETE",
      });
      const responseDelete = await response.json();
      return responseDelete;
    } catch (error) {
      console.error(`Erro: ${error}`);
    }
  }
  return await deleteProjectUser();
};

//atualizar projeto
apiProject.putProject = async (
  idProject,
  userId,
  titleProject,
  dateProject,
  descriptProject
) => {
  const urlProject = apiProject.url + `project`;

  async function putProjectUser(
    idProject,
    userId,
    titleProject,
    dateProject,
    descriptProject
  ) {
    try {
      const response = await fetch(urlProject, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idProject,
          userID: userId,
          titulo: titleProject,
          descricao: descriptProject,
          date: dateProject,
        }),
      });
      const projectAPI = await response.json();
      return projectAPI;
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  return await putProjectUser(
    idProject,
    userId,
    titleProject,
    dateProject,
    descriptProject
  );
};
