const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id
        body.style.color = 'white'
    })
})