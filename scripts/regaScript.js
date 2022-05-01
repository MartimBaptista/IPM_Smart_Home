
// init, end, everyMonth, fromM, toM, everyDay, fromD, toD
function addRega(){
    const name          = document.getElementById("name").value;
    const init          = document.getElementById("init").value;
    const end           = document.getElementById("end").value;
    const everyMonth    = document.getElementById("everyMonth").value;
    const fromM         = document.getElementById("fromM").value;
    const toM           = document.getElementById("toM").value;
    const everyDay      = document.getElementById("everyDay").value;
    const fromD         = document.getElementById("fromD").value;
    const toD           = document.getElementById("toD").value;

    document.getElementById("demo").innerHTML = name + init + end + everyMonth + fromM + toM + everyDay + fromD + toD;

    const listaRega = document.getElementById("listaRega");

    li = document.createElement("li");
    h4 = document.createElement("h4");
    ul = document.createElement("ul");

    timeP = document.createElement("p");
    everyDayP = document.createElement("p");
    everyMonthP = document.createElement("p");

    h4.innerHTML = "a";


    
    
}

