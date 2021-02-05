const main = "https://api.github.com/users/";
const $ = document.querySelector.bind(document);


// modelo para os dados serem inseridos
class gitModel {

  constructor(usuario,img) {

    this._img = img;
    this._usuario = usuario;
    this._repositorios = [];

  }
  get img() {
    return this._img;
  }
  get usuario() {
    return this._usuario;
  }
  get repositorios() {
    return [].concat(this._repositorios);
  }



  // método que busca dados da API

  buscaDados() {

    let request = new XMLHttpRequest();

    const profile = $('#input').value;
    const url = `${main}${profile}/repos`

    // passar como parâmetro a data

    request.open("GET", url, false);

    request.addEventListener('load', () => {

      if (request.status == 200) {

        let response = JSON.parse(request.responseText);

        response.forEach((object) => {

          let repos = {
            imagem: object.owner.avatar_url,
            nome: object.owner.login,
            repositorio: object.name,
            link: object.html_url,
            linguagem: object.language,
          }

          this._repositorios.push(repos);
        })

      }
        else if(request.status == 404){
          throw alert("404 - User not Found");
      }
      else{
          throw alert("Unknown error - please try again.");
      }    

    });

    request.send();

  }
};