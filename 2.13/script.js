const divEx = document.getElementById('modal');
divEx.classList.add('hide');
const img = document.getElementById('close');

const botao = document.getElementsByTagName('button');
botao[0].addEventListener('click', function(){
    divEx.classList.remove('hide');
    img.addEventListener('click', function(){
        divEx.classList.add('hide');
    }
    )
})
