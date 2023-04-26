var click = document.querySelector('input#btnVerify')
click.addEventListener('click', verify)

function verify() {
    var date = new Date()
    year = date.getFullYear()
    var birth = document.querySelector('input#txtbirth')
    var result = document.querySelector('div#res')
    if (birth.value.length == 0 || birth.value > year) {
        result.innerHTML = '[ERRO] Verifique o ano e tente novamente...'
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(birth.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'picture')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', './images/picbabyboy.png')
            } else if (age > 10 && age <= 21) {
                img.setAttribute('src', './images/picyoungman.png')
            } else if (age > 21 && age <= 60) {
                img.setAttribute('src', './images/picmatureman.png')
            } else {
                img.setAttribute('src', './images/picoldman.png')
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', './images/picbabygirl.png')
            } else if (age > 10 && age <= 21) {
                img.setAttribute('src', './images/picyoungwoman.png')
            } else if (age > 21 && age <= 60) {
                img.setAttribute('src', './images/picmaturewoman.png')
            } else {
                img.setAttribute('src', './images/picoldwoman.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gen} com ${age} anos.`
        result.appendChild(img)
    }
}