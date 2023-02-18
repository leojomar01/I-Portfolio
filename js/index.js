
//Selecting Elements
let path = document.querySelector('.path');
let building1 = document.querySelector('.bldg1');
let building2 = document.querySelector('.bldg2');
let building3 = document.querySelector('.bldg3');
let texts = document.querySelector('.texts');
let billboards = document.querySelector('.billboards');

let model = document.querySelector('.model');
let instruction = document.querySelector('.instruction');

// let scrollLeftLoc = document.querySelector('.scrollLeftLoc');
// window.setInterval(() => {
//     scrollLeftLoc.innerHTML = path.scrollLeft;
// }, 5);

// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Scroll function 
function horizontalScroll(){
        path.scrollLeft = window.pageYOffset / 3;
        texts.scrollLeft = path.scrollLeft;
        billboards.scrollLeft = path.scrollLeft;
        building1.scrollLeft = path.scrollLeft / 2;
        building2.scrollLeft = path.scrollLeft / 3;
        building3.scrollLeft = path.scrollLeft / 4;

        if(path.scrollLeft >= 10500){
            document.querySelector('.contacts').classList.add('contactsAnimate');
        }
}
    
//changing the direction depends on scroll
window.onscroll = function(e) {
    if(this.oldScroll < this.scrollY){
    console.log("right");
    model.classList.remove('left');
    model.classList.add('right');
    }
    else{
    console.log("left");
    model.classList.add('left');
    model.classList.remove('right');
    }
    this.oldScroll = this.scrollY;
}

var timer = null;
window.addEventListener('scroll', ()=> {
    if(timer !== null) {
        clearTimeout(timer);  
        model.classList.remove('idle');     
        model.classList.remove('meowning');
        model.classList.add('walking');      
    }
    timer = setTimeout(function() {
        model.classList.remove('walking'); 
        model.classList.add('idle');      
    }, 400);
}, false);


// model click event
model.addEventListener('click',()=>{
    model.classList.remove('idle');
    model.classList.add('meowning');
    window.setTimeout(()=>{
        model.classList.remove('meowning');
        model.classList.add('idle');
    },1200)
})