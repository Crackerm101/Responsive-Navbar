const menu= document.querySelector('.menu');
const navbar= document.querySelector('.navbar');


menu.addEventListener('click',() => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
})



document.querySelectorAll(".nav-link"). forEach(e => e.addEventListener('click', () => {
    menu.classList.remove("active");
    navbar.classList.remove("active");
}))



