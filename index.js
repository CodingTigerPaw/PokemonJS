const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

ctx.fillRect(0,0, canvas.width, canvas.height)

canvas.width = 1024
canvas.height = 578
console.log(canvas)

const image = new Image()
image.src ='./assets/map.png'

const player = new Image()
player.src = './assets/ACharDown.png'
image.onload = () =>{

ctx.drawImage(image,-600,-700, )
ctx.drawImage(player,
    0,
    0,
    player.width / 2,
    player.height-85,
    canvas.width / 2 - player.width /2,
    canvas.height / 2 - player.width/2 ,
    player.width /2,
    player.height - 70,)
}

window.addEventListener('keydown', (e)=>{
    console.log('go')
})


