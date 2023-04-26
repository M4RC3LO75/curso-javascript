function load() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#pic')
    var data = new Date()
    hora = data.getHours()
    minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora + ':' + minutos}h`
    if (hora > 0 && hora < 12) {
        img.src = './images/picmorning.png'
        document.body.style.background = '#0185DD'
    } else if (hora >= 12 && hora < 18) {
        img.src = './images/picnoon.png'
        document.body.style.background = '#B68262'
    } else {
        img.src = './images/picnight.png'
        document.body.style.background = '#525858'
    }
}