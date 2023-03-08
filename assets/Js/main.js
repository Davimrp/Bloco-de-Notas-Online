const botaoNovaTarefa = document.querySelector('.btn-nova-tarefa');
const janelaNovaTarefa = document.querySelector('.nova-tarefa');
const botaoSairDaNovaTarefa = document.querySelector('.img-sair');
const botaoAdicionar = document.querySelector('#adicionar');

let tarefas = [];

function criaElementos(titulo, conteudo){
    const divTarefa = document.createElement('div');
    const divImgSairTrf = document.createElement('div');
    const imgSairTrf = document.createElement('img');
    const tituloElement = document.createElement('p');
    const conteudoElement = document.createElement('p');

    imgSairTrf.src =  'assets/imgs/sair.png'

    divTarefa.appendChild(divImgSairTrf);
    divTarefa.appendChild(tituloElement);
    divTarefa.appendChild(conteudoElement);
    divImgSairTrf.appendChild(imgSairTrf);

    divTarefa.classList.add('tarefa');
    divImgSairTrf.classList.add('img-sair-trf');
    tituloElement.setAttribute('id:', 'titulo-trf');
    conteudoElement.setAttribute('id:', 'conteudo-trf');
    imgSairTrf.classList.add('img-excluir');

    tituloElement.style.fontSize = '1.5rem';
    conteudoElement.style.textAlign = 'start';
    conteudoElement.style.fontSize = '1.1rem';
    conteudoElement.style.marginLeft = '10px';
    conteudoElement.style.color = 'rgb(50, 50, 80)';

    tituloElement.textContent = titulo;
    conteudoElement.textContent = conteudo;

    return divTarefa;
}

function adicionarNovaTarefa(){
    const titulo = document.querySelector('#titulo').value;
    const conteudo = document.querySelector('#conteudo').value;
    const novaTarefa = criaElementos(titulo, conteudo);
    tarefas.push({titulo, conteudo});
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    document.querySelector('.tarefas-feitas').appendChild(novaTarefa);
    sairDaNovaTarefa();
    
    document.querySelector('#titulo').value = ''
    document.querySelector('#conteudo').value = ''
}
botaoAdicionar.addEventListener('click', adicionarNovaTarefa);

function abrirNovaTarefa(e){
    janelaNovaTarefa.classList.remove('some')
    document.querySelector('.nova-tarefa-background').classList.remove('some');
}
botaoNovaTarefa.addEventListener("click", abrirNovaTarefa)

function sairDaNovaTarefa(){
    janelaNovaTarefa.classList.add('some')
    document.querySelector('.nova-tarefa-background').classList.add('some');
}

botaoSairDaNovaTarefa.addEventListener('click', sairDaNovaTarefa)

// Carregar tarefas do localStorage ao iniciar a página
if(localStorage.getItem('tarefas')) {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
    tarefas.forEach(tarefa => {
        const novaTarefa = criaElementos(tarefa.titulo, tarefa.conteudo);
        document.querySelector('.tarefas-feitas').appendChild(novaTarefa);
    });
}

document.addEventListener('click', (e)=>{
    if (e.target.classList == 'img-excluir'){
        const btnExcluir = e.target
        const divTarefa = btnExcluir.parentNode.parentNode
        const index = Array.from(divTarefa.parentNode.children).indexOf(divTarefa)
        
        tarefas.splice(index, 1)
        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        divTarefa.remove() 
    } 
    
})