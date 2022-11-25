let custom = () => {
    var num = prompt('Qual a porcentagem de gorjeta desejada? ')
    num = parseFloat(num)

    let conta = document.querySelector('#bill').value;
    let pessoas = document.querySelector('#people').value;
    let valorPorcent = num / 100;

    
    if(pessoas == ''){
        alert('Digite primeiro a quantidade de pessoas')
    }

    let resultado = (conta / pessoas) * valorPorcent;
    
    conta = parseFloat(conta)
    pessoas = parseFloat(pessoas)
    valorPorcent = parseFloat(valorPorcent)
    resultado = parseFloat(resultado)

    document.querySelector('#info-content').value = 'R$ ' + resultado

    let total = Number(conta + resultado)

    console.log(total)

    document.querySelector('#total').value = 'R$ ' + total
}

let gorjeta = (porcent ) => {
    let conta = document.querySelector('#bill').value;
    let pessoas = document.querySelector('#people').value;
    let valorPorcent = porcent / 100;

    
    if(pessoas == ''){
        alert('Digite primeiro a quantidade de pessoas')
    }

    let resultado = (conta / pessoas) * valorPorcent;
    
    conta = parseFloat(conta)
    pessoas = parseFloat(pessoas)
    valorPorcent = parseFloat(valorPorcent)
    resultado = parseFloat(resultado)

    document.querySelector('#info-content').value = 'R$ ' + resultado

    let total = Number(conta + resultado)

    console.log(total)

    document.querySelector('#total').value = 'R$ ' + total
}

function reset(){
    document.querySelector('#people').value = '';
    document.querySelector('#bill').value = ''; 
    document.querySelector('#info-content').value = '';
    document.querySelector('#total').value = '';
}