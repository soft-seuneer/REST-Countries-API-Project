
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.bx');



toggle.addEventListener('click', e => {
    document.body.classList.toggle('dark-mode');
    icon.classList.toggle('bxs-moon');
})





