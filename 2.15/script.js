botoes = document.querySelectorAll('button');
let notas = document.getElementsByClassName('nota');


console.log(parseFloat(notas[0].value));

botoes.forEach((element, index) => {
    element.addEventListener('click', function(){
        
        let notaText = notas[index].textContent.trim();
        let nota = parseFloat(notaText);
        
        let linhatr = element.closest('tr');
        if(nota < 5){
            console.log(nota)
            linhatr.classList.add('reprovado');
        }else{
            linhatr.classList.add('aprovado');
            console.log(nota)
        }
    })
});