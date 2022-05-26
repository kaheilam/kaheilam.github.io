const icon = document.querySelector('.hook-header .hook-nav-bar .nav-list .nav-icon');
const mobile_menu = document.querySelector('.hook-header .hook-nav-bar .nav-list ul');
const header = document.querySelector('.hook-header.container');

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    let scroll_pos = window.scrollY;
    if (scroll_pos > 250) {
        header.style.backgroundColor = "#343f4f";
    }else if (scroll_pos < 0 ) {
        header.style.backgroundColor = "rgba(24, 30, 35, 0.69)";
    }
})