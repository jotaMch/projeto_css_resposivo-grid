const form = document.getElementById('form');
const nome = [];
const idade = [];
const profissao =[];
const senioridade = [];

let linhas = '';


form.addEventListener('submit', function(event) {
    event.preventDefault();

    function loading() {
        const loadingClass = document.querySelector('.loading');
        const loadingGif = '<img src="img/icons8-dots-loading.gif" alt="Carregando...">';
    
        loadingClass.innerHTML = loadingGif;
    }

    function formSubmit() {
        const nomeInput = document.getElementById('nome').value;
        const idadeInput = document.querySelector('input[name="idade"]:checked').value;
        const profissaoInput = document.getElementById('profissao').value;
        const senioridadeInput = document.querySelector('input[name="senioridade"]:checked').value;

        if (nome.includes(nomeInput)) {
            //alert("Nome já existe!");
        } else {
            nome.push(nomeInput);
            idade.push(idadeInput);
            profissao.push(profissaoInput);
            senioridade.push(senioridadeInput);
            //alert("Nome adicionado com sucesso!");
            console.log(nome)

            linha = '<tr>';
            linha += `<td>${nomeInput} </td>`;
            linha += `<td>${idadeInput} </td>`;
            linha += `<td>${profissaoInput} </td>`;
            linha += `<td>${senioridadeInput} </td>`;
            
            linhas += linha;
        }

        respostasTbody();
        limparCampos();
    }

    loading();
    esconderGif();
    setTimeout(formSubmit, 2000);

});

function respostasTbody() {
    const corpoAtualiza = document.querySelector('tbody');
    corpoAtualiza.innerHTML = linhas;
    corpoAtualiza.style.width = '500px';

}

function esconderGif() {
    const loading = document.querySelector('.loading');
    setTimeout(function() {
        loading.innerHTML = '';
    }, 1900);
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.querySelector('input[name="idade"]:checked').checked = false;
    document.getElementById('profissao').value = '';
    document.querySelector('input[name="senioridade"]:checked').checked = false;
}