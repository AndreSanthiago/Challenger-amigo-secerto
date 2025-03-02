//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// sorteio do amigo
<meta charset="UFT-8">
let amigos = [];

function adicionarAmigos(){
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value;
    amigos.push(nomeAmigo);
    inputAmigo.focus();

    if (!nomeAmigo){
        alert('Digite o nome do amigo');
        return;
    }
}
function atualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    let lista = '';
    for (let i = 0; i < amigos.length; i++){
        lista += '<li>' + amigos[i] + '</li>';
    }
    listaAmigos.innerHTML = lista;
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert('Adicione amigos antes de sortear');
         return;
    let amigoSorteado = document.getElementById('amigoSorteado');
    let indice = Math.floor(Math.random() * amigos.length);
    amigoSorteado.innerHTML = `O amigo sorteado foi: ${Sorteado};
    let limpar listaAmigos = document.getElementById('listaAmigos');
    limparListaAmigos.innerHTML = '';
    amigos = [];
}