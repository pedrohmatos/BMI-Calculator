const calcularBtn = document.querySelector('#bttnCalcular');
const apagarBtn = document.querySelector('.clear');

apagarBtn.addEventListener('click', () => {
    document.getElementById('infos').classList.remove('ativado');
});

calcularBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const peso = document.querySelector('#weight').value;
    const altura = document.querySelector('#height').value;
    const imc = (peso / altura**2).toFixed(2);
    
    
    const num = document.querySelector('#num');
    num.innerHTML = `${imc}`;

    const avaliation = document.querySelector('#avaliation p');

    if (imc < 18.5) {
        num.style.cssText = `color: rgb(247, 53, 53)`;
        avaliation.innerHTML = `Magreza`;
    } else if (imc < 24.9) {
        num.style.cssText = `color: #16a34a`;
        avaliation.innerHTML = `Peso ideal`;
    } else if (imc < 29.9) {
        num.style.cssText = `color: rgb(247, 53, 53)`;
        avaliation.innerHTML = `Sobrepeso`;
    } else if (imc < 39.9) {
        num.style.cssText = `color: rgb(247, 53, 53)`;
        avaliation.innerHTML = `Obesidade`;
    } else {
        num.style.cssText = `color: rgb(247, 53, 53)`;
        avaliation.innerHTML = `Obesidade grave`;
    }

    document.getElementById('infos').classList.add('ativado');
});