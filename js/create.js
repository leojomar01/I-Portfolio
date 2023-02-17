 // create 'bird'
 for(var x=1;x<=8;x++){
    const bird = document.createElement('div');
    const box = document.createElement('div');
    bird.classList.add('bird','bird'+x);
    box.classList.add('box','box'+x)
    birds[0].appendChild(bird);
    birds[0].appendChild(box);
}
for(var x=1;x<=5;x++){
    const bird = document.createElement('div');
    const box = document.createElement('div');
    bird.classList.add('bird','bird2'+x);
    box.classList.add('box','box2'+x)
    birds[1].appendChild(bird);
    birds[1].appendChild(box);
}

for(var x=1;x<=4;x++){
    const billboard = document.createElement('div');
    billboard.classList.add('billboard','billBoardProject'+x);
    document.querySelector('.billboards .projects').appendChild(billboard)
}

for(var x=1;x<=1;x++){
    const billboard = document.createElement('div');
    billboard.classList.add('billboard','billBoardProject2'+x);
    document.querySelector('.billboards .projects').appendChild(billboard)
}