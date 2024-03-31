
const moverBoton = document.getElementById("button_no");
const button_si =  document.getElementById("button_si");
const dedicatoria = document.getElementById("dedicatoria");
  
moverBoton.addEventListener("click", function() {
    const nuevaPosX = Math.floor(Math.random() * 100) - 1;
    const nuevaPosY = Math.floor(Math.random() * 400) - 1;
  
    moverBoton.style.position = "absolute"
    moverBoton.style.left = nuevaPosX + "px";
    moverBoton.style.top = nuevaPosY + "px";
});

button_si.addEventListener("click", function(){
    dedicatoria.style.zIndex = "2"
    dedicatoria.style.background = "rgb(65, 61, 61)"
    dedicatoria.style.color = "white"
})
  