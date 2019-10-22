
var button = document.querySelector('.button')
button.addEventListener('click', readMore)

function readMore(){
    info.style.display = 'block'

if(screen.width <=768){
   window.scrollBy({
    top: 812,
    left: 0,
    behavior: 'smooth'
})}else{
    window.scrollBy({
        top: 1000,
        left: 0,
        behavior: 'smooth'
})};

};


var info = document.querySelector('#info')

window.onload = function hide(){
    info.style.display = 'none'
}

