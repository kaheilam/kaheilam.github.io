const icon = document.querySelector('.banner .navbar .navList .navIcon');
const mobile_menu = document.querySelector('.banner .navbar .navList ul');
const menu_item = document.querySelectorAll('.banner .navbar .navList ul li a');

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        icon.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});