let linhaTabela = document.querySelectorAll('tr');

linhaTabela.forEach(tr => tr.className === 'vermelho' ? tr.className = 'azul' : tr.className = 'vermelho');
