const style = document.createElement('style');
style.innerHTML = ` .texto {
                    text-align: center;
                    font-weight: bold;
                }`;
document.head.appendChild(style);


function formataTexto(){
    const paragrafo = document.querySelector('p');
    paragrafo.classList.add('texto');
}