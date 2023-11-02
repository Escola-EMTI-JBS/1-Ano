function ativo(id){
    if(id == 0){
        window.location.href = 'https://www.youtube.com/@manualdomundo'
    }else if (id == 1){
        window.location.href = 'https://www.youtube.com/@CienciaTodoDia'
    }
}

function desafio(){
    var box = document.getElementById('conta')
    box.style.display = 'block'
    var btn = document.getElementById('btn-desafio')
    btn.style.display = 'none'
}

function resposta(){
    var res = 16
    var user = document.getElementById('res-num')
    var res_user = Number(user.value)

    if(res_user != 0){
        if(res_user == res){
            Ganhou()
        }else{
            window.alert('Resposta errada! ,_ ,')
        }
    }
}

function Ganhou(){
    var card = document.getElementById('art2')
    var desafio = document.getElementById('desafio')
    var card_ganhou = document.getElementById('ganhou')

    card_ganhou.style.display = 'block'

    setTimeout(function() {
        card.style.background = 'blue'
    },1000)
    setTimeout(function() {
        card.style.background = 'yellow'
    },1500)
    setTimeout(function() {
        card.style.background = 'pink'
    },2000)
    setTimeout(function() {
        card.style.background = 'gray'
    },2500)
    setTimeout(function() {
        card.style.background = 'black'
    },3000)
    setTimeout(function() {
        card.style.background = 'white'
    },3500)
    setTimeout(function() {
        card.style.background = '#e15d75'
    },4000)
    setTimeout(function() {
        card.style.background = '#0b88c1'
    },4500)
     setTimeout(function() {
        card.style.background = '#397d54'
        desafio.style.display = 'none'
    },5000)
}

on = 0
function teste() {
    var t = document.getElementById('menu-icon')
    var opcao = document.getElementById('opc')
    t.innerHTML = 'close'
    if (on == 0) {
        t.innerHTML = 'close'
        opcao.style.display = 'flex'
        on++
    }else if(on == 1) {
        t.innerHTML = 'menu'
        opcao.style.display = 'none'
        on--
    }
}