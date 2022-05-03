function Update(){
    var slider = document.getElementById("valorSlider");
    var luminosidade = document.getElementById("lumValor");
    luminosidade.innerHTML = slider.value;
    
    slider.oninput = function() {
      luminosidade.innerHTML = slider.value;
    }
}