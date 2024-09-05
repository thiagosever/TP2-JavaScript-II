document.getElementById('item').addEventListener('click', function trocaClass(){
    
    const olDaClass = this.parentNode;
    olDaClass.classList.add('listaSelecionada');
});