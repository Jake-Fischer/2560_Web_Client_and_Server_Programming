let text = 'This is sample text, if things are working this should be somewhat easlily readable from the individual words on the screen'
let singles = text.split(" ")
console.log(text)
console.log(singles)
console.log(singles.length)

let readingFocus = document.querySelector('#read-spot')

singles.forEach(function(word){
    setTimeout( function() {
        console.log(word)
        readingFocus.innerHTML = word
    })   
})

function controler(text){
    text.forEach( function(word){
        
    })
}