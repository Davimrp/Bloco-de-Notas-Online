const botaoNovaTarefa = document.querySelector('.btn-nova-tarefa');
const janelaNovaTarefa = document.querySelector('.nova-tarefa');
const botaoSairDaNovaTarefa = document.querySelector('.img-sair');



function sairDaNovaTarefa(){
    janelaNovaTarefa.classList.add('some')
    document.querySelector('.nova-tarefa-background').classList.add('some');
}

botaoSairDaNovaTarefa.addEventListener('click', sairDaNovaTarefa)

function abrirNovaTarefa(e){
    janelaNovaTarefa.classList.remove('some')
    document.querySelector('.nova-tarefa-background').classList.remove('some');
}
botaoNovaTarefa.addEventListener("click", abrirNovaTarefa)