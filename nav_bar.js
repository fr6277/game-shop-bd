const toggle_btn=document.querySelector(".toggle_btn")
const navBarLinks=document.querySelector(".navbar_links")
toggle_btn.addEventListener('click', () => {
navBarLinks.classList.toggle('.active')
})

console.log(toggle_btn)
