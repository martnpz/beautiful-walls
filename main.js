let modal = document.getElementById('wall')
let wall = document.getElementsByClassName('.wall1')
let modalClose = document.getElementsByClassName('.modalFull')

modal.addEventListener('click', ()=> {
    modal.classList.add('modalFull')
})

modalClose.addEventListener('click', ()=> {
    modal.classList.remove('modalFull')
})