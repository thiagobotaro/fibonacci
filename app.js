let tabela = [0, 1];
let numero = 0;

// teste

function adicionar(){
numero = parseInt(document.getElementById('campo-1').value);
let contador = 0;
console.log('numero:' + numero);

let resultado = document.getElementById('resultado');

while(contador < numero){
let ultimo = tabela.length - 1;
let penultimo = tabela.length - 2;
let novo = tabela[ultimo] + tabela[penultimo];
tabela.push(novo);
resultado.innerHTML = tabela;
contador++;
}
}

function limpar(){
    console.clear();
    tabela = [0, 1];
    numero = '0';
    resultado.innerHTML = '';
    document.getElementById('campo-1').value = '';
}