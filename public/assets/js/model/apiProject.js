const apiProject = {};
apiProject.url = `http://localhost:8080/`;

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

apiProject.postProject = async (userID, titleProject, descriptProject) => {
  const urlProject = apiProject.url + `project`;
  const currentDate = new Date();

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
          date: currentDate.getDate(),
        }),
      });
      const projectAPI = await response.json();
      return projectAPI;
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  return await postProjectUser(userID, titleProject, descriptProject);
};

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
