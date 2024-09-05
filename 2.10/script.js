let botao = document.createElement('button');
botao.innerHTML = "inserir";
document.body.appendChild(botao);

botao.addEventListener('click', function(){ 
    const divPai = document.getElementById('container');
    const h2Criado = document.createElement('h2');
    h2Criado.innerHTML = "Inserido!"
    divPai.appendChild(h2Criado);
})