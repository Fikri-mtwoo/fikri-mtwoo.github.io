// navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
    }
}

// humberger menu di klik dan munculkan menu sidebar
const humberger = document.querySelector('#humberger')
const navmenu = document.querySelector('#nav-menu')
humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active')
    navmenu.classList.toggle('hidden')
})

// sidebar bisa ditutup dengan klik apa pun
window.addEventListener('click', function(e){
    if(e.target != humberger && e.target != navmenu){
        humberger.classList.remove('humberger-active')
        navmenu.classList.add('hidden')
    }
})

//darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

//pindah posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
      darkToggle.checked = false;
}