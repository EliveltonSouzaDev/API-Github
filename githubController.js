
class gitController {

    buscarInfo(user) {

        let dados = new gitModel(user)
        dados.buscaDados()

        let desenha = new gitViews()
        desenha.criaElementos(dados);
    }

}

// busca os dados da model junto com o views e insere

const profile = $('#input').value;
let btn = document.getElementById('submit');

/*limpa o formulário*/
function limpar() {
    $('#input').value = "";
}

let gitHub = new gitController();

btn.addEventListener('click', () => {
   
    gitHub.buscarInfo(profile);
    limpar();
});