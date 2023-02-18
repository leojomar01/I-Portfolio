let touchstartY, touchstartX, touchendY, touchendX = 0;

function checkDirection() {
if (touchendX < touchstartX){
    path.scrollTo({
        top: 0,
        left: Math.max(touchstartX - touchendX),
        behavior: 'smooth'
      });;
};

if (touchendX > touchstartX){
    path.scrollTo({
        top: 0,
        left: Math.max(touchstartX - touchendX),
        behavior: 'smooth'
      });;
}
}

document.addEventListener('touchstart', e => {
touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
touchendX = e.changedTouches[0].screenX
console.log(touchstartX-touchendX)
checkDirection()
})


  