


let peso = document.getElementById('peso')
let alt = document.getElementById('altura')
let botao = document.getElementById('calcular')

let elemento = document.getElementById('abaixoDe')
let entre = document.getElementById('entre')
let sobrepeso = document.getElementById('sobrepeso')






botao.addEventListener('click', () => {
    let calculo = (peso.value / (alt.value * 2))
    if (calculo < 18) {
        elemento.setAttribute('style', 'color: red ;font-weight:bold;')
        entre.setAttribute('style', 'color: black;')
        sobrepeso.setAttribute('style', 'color: #00A9E9 black;')
    }else if(calculo > 18 && calculo < 24 ){
        elemento.setAttribute('style', 'color: black;')
        entre.setAttribute('style', 'color: #00A9E9 ;font-weight:bold;')
        sobrepeso.setAttribute('style', 'color: #00A9E9 black;')
    }else if(calculo > 25 && calculo < 29){
        elemento.setAttribute('style', 'color: black;')
        entre.setAttribute('style', 'color: black;')
        sobrepeso.setAttribute('style', 'color: #00A9E9 ;font-weight:bold;')
    }
})


