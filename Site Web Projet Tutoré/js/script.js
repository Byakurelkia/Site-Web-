let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

}

window.onscroll= () =>{
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index=0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 8000); //slides change tout les 8 sec

var prevv = document.querySelector(".prev-btn");
var nextt = document.querySelector(".next-btn");
var slidess = document.querySelector(".slider-items").children;
var totalSlides = slidess.length;
var indexx = 0;

nextt.onclick = () =>{
    slide("next");
}

prevv.onclick = () =>{
    slide("prev");
}

function slide(dir){
    if(dir=="next"){
        indexx++;
        if(indexx==totalSlides){
            indexx = 0;
        }
    }

    if(dir=="prev"){
        if(indexx==0){
            indexx = totalSlides - 1;
        }
        else{
            indexx--;
        }
    }

    for(i=0; i<totalSlides;i++){
        slidess[i].classList.remove("active");
    }
    slidess[indexx].classList.add("active");
}

window.setInterval(
    function (){
        slide("next");
    }, 5000
)