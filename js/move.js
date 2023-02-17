

let objects = [
    
    document.querySelector('.birdAssets'),
    document.querySelector('.birdAssets2'),
    document.querySelector('.planeSpl'),
    document.querySelector('.planeOts')
];

let distance = [0,0,0,0];
let moving = [false,false,false,false];
let distanceMoved = [0,0,0,0];
let movingSpeed = [-3,-3,2,2];
let movingInterval =[100,100,10,10];
let triggerLocation = [2500,3800,2500,4200];

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

