
let menu_info = document.querySelector('.information');
document.querySelector('#info').onclick = () =>{
    menu_info.classList.add('info');
};

//icon menu
let navbar = document.querySelector('nav');
let menu = document.querySelector('#menu');

function menu_icon(menu){
    navbar.classList.toggle("active");
    information.classList.remove('info');
    search.classList.remove('active');
    user.classList.remove('active');
};

//icon info
let information = document.querySelector('.information');
let info = document.querySelector('#info');
let close =document.querySelector('#close');

function info_icon(info){
    information.classList.add('info');
    navbar.classList.remove("active");
    search.classList.remove('active');
    user.classList.remove('active');
};

function close_icon(info){
    information.classList.remove('info');
};

//icon search
let search = document.querySelector('.search');
let icon_search = document.querySelector('#search');

function search_icon(icon_search){
    search.classList.toggle('active');
    user.classList.remove('active');
    information.classList.remove('info');
    navbar.classList.remove("active");
};

//icon user
let user = document.querySelector('.user');
let icon_user = document.querySelector('#user');

function user_icon(icon_user){
    user.classList.toggle('active');
    search.classList.remove('active');
    information.classList.remove('info');
    navbar.classList.remove("active");
}

//home image
let image = document.querySelector('.home');
let array_image = ['home-slide-1.jpg','home-slide-2.jpg','home-slide-3.jpg'];

setInterval(() => {
    //get randum number
    let rnd = Math.floor(Math.random() * array_image.length);
    
    //change background img url
    image.style.backgroundImage = 'url("images/'+array_image[rnd]+'")';
}, 1000); 


//scrol
window.onscroll = () =>{
    information.classList.remove('info');
    navbar.classList.remove("active");
    search.classList.remove('active');
    user.classList.remove('active');
}

