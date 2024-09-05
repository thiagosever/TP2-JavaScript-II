const botao = document.createElement('button');
botao.innerHTML = "Inserir";
document.body.appendChild(botao);

botao.addEventListener('click', function(){
    let liCriada = document.createElement('li');
    liCriada.innerHTML = 'Nova Entrada';
    let ulLista = document.getElementById('lista');
    ulLista.appendChild(liCriada);
})