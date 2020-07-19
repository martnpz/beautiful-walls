let wall = document.querySelectorAll('.wall')
let img = document.getElementsByClassName('.wallpaper')

wall.forEach((wall) => {
    wall.addEventListener('click', () => {
        wall.classList.toggle('modal')
    })
})

