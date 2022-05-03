function verificar(){
    let numero = document.getElementById('txtn');
    let resposta = document.getElementById('res');
    let n = Number(numero.value);
    if(n % 2 == 0){
        resposta.innerHTML = `O número ${n} é par`
    } else{
        resposta.innerHTML = `O número ${n} é impar`
    }
}