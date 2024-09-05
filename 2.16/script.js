let paragrafos = document.querySelectorAll('p');
paragrafos.forEach(el => el.classList.add('closed'));

const conteudo = document.getElementsByClassName('accordion-item');
const conteudoDiv = Array.from(conteudo);

conteudoDiv.forEach(el => {
    el.addEventListener('click', function() {
        const paragrafo = this.querySelector('p');
        if (paragrafo.className === 'opened'){
            paragrafo.className = 'closed';
        }else{
            paragrafo.className = 'opened';
        }
        conteudoDiv.forEach(otherItem => {
            if (otherItem !== this) {
                const otherParagrafo = otherItem.querySelector('p');
                otherParagrafo.classList.remove('opened');
                otherParagrafo.classList.add('closed');
            }
        });
    });
});






