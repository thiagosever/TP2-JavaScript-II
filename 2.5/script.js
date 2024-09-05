const titulo = document.createElement('class');
const styleTitulo = document.createElement('style');
styleTitulo.innerHTML = `.titulo{
    text-align: center;
    color: white;
    background-color: blue;
}`;
titulo.appendChild(styleTitulo);

function ativaClasse(){
    const h1Class = document.querySelector('h1');
    h1Class.classList.toggle("titulo");
}
