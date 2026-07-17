const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// Largura da imagem + margem
const imageWidth = 175;

function update(){
    track.style.transform = `translateX(-${index * imageWidth}px)`;
}

next.addEventListener("click", ()=>{

    if(index < images.length - 2){
        index++;
    }else{
        index = 0;
    }

    update();

});

prev.addEventListener("click", ()=>{

    if(index > 0){
        index--;
    }else{
        index = images.length - 2;
    }

    update();

});

// Troca automática a cada 3 segundos
setInterval(()=>{
    next.click();
},3000);
