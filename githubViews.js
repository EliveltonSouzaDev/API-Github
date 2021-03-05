
class gitViews {

    constructor() {

       this._name = $("#user-info"); // pega o id no html e atribui para o this._name
        this._repo = $("#repo");// pega o id no html e atribui para o this._name
    }


    addRepo(dados) { // crio um método

        let list = ""; // cria uma variável vazia
        let img = ""; // cria uma variável vazia


        // busca os atributos no objeto repositorio
        dados.repositorios.forEach((i) => { 
            
            img = ` 
            <img
                src="${i.imagem}"
                alt=""
                id="img"
            />
            <p class="login-name"> ${i.nome}<p>

            <h3 class="repo-title">Repositories</h3>
            `;

            list += `
                <ul> 
                <li class="repos"><a href="${i.link}" target="_blank">${i.repositorio}</a> | ${i.linguagem} </li>
                </ul>
                `;
        })

        return `

        ${img}
        
        <ul id="lista-repo">
           ${list}
        </ul>
        `
    }

    criaElementos(dados) {
        console.log(dados);
        if (dados.repositorios.length > 0) {
            this._name.innerText = dados.usuario;
            this._repo.innerHTML = this.addRepo(dados);
        }
    }
};

