document.querySelector('button').addEventListener('click', function (){
    const paragrafos = document.querySelectorAll('p');
    const divPai = this.parentElement;

    if(paragrafos[0].style.display === 'none'){
        paragrafos.forEach(p => p.style.display = 'block');
        divPai.style.backgroundColor = '';
    }else{
        paragrafos.forEach(function(p) {p.style.display = 'none'});
        divPai.style.backgroundColor = 'blue';
        divPai.style.height = '200px';
    }
});