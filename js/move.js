

let objects = [
    
    document.querySelector('.birdAssets'),
    document.querySelector('.birdAssets2'),
    document.querySelector('.planeSpl'),
    document.querySelector('.planeOts')
];


vpw = window.innerWidth;
let distance = [0,0,0,0];
let moving = [false,false,false,false];
let distanceMoved = [0,0,0,0];
let movingSpeed = [-3,-3,2,2];
let movingInterval =[100,100,10,10];
let triggerLocation = [vpw * 1.7,vpw * 3.1,vpw * 1.7,vpw * 3.1];
// let triggerLocation = [50000000,50000000,50000000,50000000];

console.log(vpw);
console.log(vpw * 1.8);
let birds = document.querySelectorAll('.birds');
    // scrolling event listener
for(let i =0;i<=3;i++){
    document.addEventListener('scroll', function horizontalScroll(){
        objects[i].scrollLeft = path.scrollLeft + (distanceMoved[i]);//walking speed
        distance[i] = path.scrollLeft ;//get the distance when scrolled
        if(objects[i].scrollLeft >= triggerLocation[i]){
            moving[i]=true;
        }
    });

    window.setInterval(() => {
        if(moving[i] == true){
            objects[i].scrollLeft += movingSpeed[i];//speed
            distanceMoved[i] = objects[i].scrollLeft - distance[i];
        }
    }, movingInterval[i]);//interval

}

