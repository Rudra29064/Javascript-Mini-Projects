const randomcolor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let id

const startchangingcolor = function() {
    if(!id) {
        id = setInterval(function() {
            document.body.style.backgroundColor = randomcolor()
        }, 1000)
    }
}

const stopchangingcolor = function() {
    clearInterval(id)
    id = null
    document.querySelector('.result').innerHTML = '<br>' + randomcolor()
}

document.querySelector('#start').addEventListener('click', startchangingcolor)
document.querySelector('#stop').addEventListener('click', stopchangingcolor)
document.querySelector('#clear').addEventListener('click', function() {
    document.body.style.backgroundColor = "#FFFFFF"
})