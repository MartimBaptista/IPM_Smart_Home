
// init, end, everyMonth, fromM, toM, everyDay, fromD, toD
function addFeed(){
    const listaFeeder = document.getElementById("listaFeeder");
    if (listaFeeder.childElementCount == 3) {
        alert("Demasiados Horários, recarregue a página");
        toggleAddFeed();
        throw "Too many timers";
    }

    const name          = document.getElementById("name").value;
    const init          = document.getElementById("init").value;
    const end           = document.getElementById("end").value;
    const timesAmount         = document.getElementById("timesAmount").value;   
    const foodAmount          = document.getElementById("foodAmount").value;   
    
    if (name == "") {
        alert("O nome do animal deve ser preenchido");
        throw "No Name";
    }
    if (init == "") {
        alert("A hora de início deve ser preenchida");
        throw "No init";
    }
    if (end == "") {
        alert("A hora de fim deve ser preenchida");
        throw "No end";
    }
    if (timesAmount == "" || timesAmount < 1) {
        alert("A quantidade de vezes diárias são inválidas");
        throw "No timesAmount";
    }
    if (foodAmount == "" || foodAmount < 200) {
        alert("A quantidade de comida é inválida");
        throw "No foodAmount";
    }
    div = document.createElement("div");

    h4 = document.createElement("h4");
    info = document.createElement("span");
    
    h4.innerText = name;
    info.innerText = init + " -- " + end + "  |  " + timesAmount + " x " + (foodAmount/timesAmount).toPrecision(5) + "g\n Total " + foodAmount + "g";

    div.appendChild(h4);

    info.setAttribute("font-size", "10px");
    info.setAttribute("class", "tabbed");

    div.appendChild(info);

    listaFeeder.appendChild(div);

}

function toggleAddFeed() {
    hideToggleById("feed");
    hideToggleById("addFeed");
}



