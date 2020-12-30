var container = document.querySelector('section.container')
const data = new Date()

function zeroEsquerda(number) {
    return number >= 10 ? number : `0${number}`
}

function DiaDaSemana(dia) {
    switch (dia) {
        case 0:
            dia = 'domingo'
            return dia;
        case 1:
            dia = 'segunda'
            return dia;
        case 2:
            dia = 'terça'
            return dia;
        case 3:
            dia = 'quarta'
            return dia;
        case 4:
            dia = 'quinta'
            return dia;
        case 5:
            dia = 'sexta'
            return dia;
        case 6:
            dia = 'sabado'
            return dia;
        default:
            dia = ''
            return dia
    }
}

function mesDoAno(mes) {
    switch (mes) {
        case 1:
            mes = 'janeiro'
            return mes;
        case 2:
            mes = 'fevereiro'
            return mes;
        case 3:
            mes = 'março'
            return mes;
        case 4:
            mes = 'abril'
            return mes;
        case 5:
            mes = 'maio'
            return mes;
        case 6:
            mes = 'junho'
            return mes;
        case 7:
            mes = 'julho'
            return mes;
        case 8:
            mes = 'agosto'
            return mes;
        case 9:
            mes = 'setembro'
            return mes;
        case 10:
            mes = 'outubro'
            return mes;
        case 11:
            mes = 'novembro'
            return mes;
        case 12:
            mes = 'dezembro'
            return mes;
        default:
            dia = ''
            return dia
    }
}

function criaTexto(data) {
    diaMes = data.getDate()
    diaSemana = DiaDaSemana(data.getDay())
    mes = mesDoAno(data.getMonth() + 1)
    ano = data.getFullYear()
    hora = data.getHours()
    minuto = data.getMinutes()
    return `hoje é ${diaSemana}, ${mes} de ${ano} ${hora}:${minuto} `
}


function escreveTexto() {
    texto = document.createTextNode(criaTexto(data))
    container.appendChild(texto)
}
escreveTexto()