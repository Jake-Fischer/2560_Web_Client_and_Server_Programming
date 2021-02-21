//alert("is this working?")

//Set up canvas and tontext
let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

//Set up input
let input = document.querySelector('#image-text')
input.disabled = true

//Set up image and define it's source
let image = new Image()
image.src = 'small-cat.jpg'

//Event listener to determine when the image loads, when it does, draw it
image.addEventListener('load', function(){
    context.drawImage(image, 0, 0)
    input.disabled = false
})

//Event listener to redraw the image and all text in the text box on the image, whenever the image is changed
input.addEventListener('input', function(){
    let text = this.value
    context.fillStyle = 'white'
    context.font = '15px courier'
    context.drawImage(image,0,0)
    context.fillText(text, 50, 100)
})
