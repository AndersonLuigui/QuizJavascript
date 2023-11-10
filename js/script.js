const sequencia = [40, 50, 8, 25, 14, 60, 50, 99, 200, 485, 5, 8];

filterButton = () => {
    const maior10 = sequencia.filter(valor => valor >= 10);
    document.getElementById('expressao').innerText = 'Parabéns você acertou! O Método Filter sempre retorna um Array com a mesma quantidade de elementos ou menos. ' + maior10;
    return maior10;
}

mapButton = ()=> {
    document.getElementById('expressao').innerText = 'Você clicou no botão errado! Similar ao Filter o método Map retorna um Array modificado e sempre do mesmo tamanho do Array original'
}

reduceButton = () => {
    document.getElementById('expressao').innerText = 'Você clicou no botão errado! o método Reduce reduz o array para um elemento só'
}
