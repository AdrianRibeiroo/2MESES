const track = document.querySelector(".carousel-track");

const images = document.querySelectorAll(".carousel-track img");

const prev = document.querySelector(".prev");

const next = document.querySelector(".next");

let index = 0;

const imageWidth = 130;

function update(){

    track.style.transform = `translateX(-${index*imageWidth}px)`;

}

next.onclick=()=>{

    if(index<images.length-2){

        index++;

    }else{

        index=0;

    }

    update();

}

prev.onclick=()=>{

    if(index>0){

        index--;

    }else{

        index=images.length-2;

    }

    update();

}

setInterval(()=>{

    next.click();

},3000);