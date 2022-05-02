
// init, end, everyMonth, fromM, toM, everyDay, fromD, toD
function addRega(){
    const name          = document.getElementById("name").value;
    const init          = document.getElementById("init").value;
    const end           = document.getElementById("end").value;
    const everyMonth    = document.getElementById("everyMonth").checked;
    const fromM         = document.getElementById("fromM").value;
    const toM           = document.getElementById("toM").value;
    const everyDay      = document.getElementById("everyDay").checked;
    const fromD         = document.getElementById("fromD").value;
    const toD           = document.getElementById("toD").value;


    const listaRega = document.getElementById("listaRega");
    
    h4 = document.createElement("h4");
    li = document.createElement("li");
    ul = document.createElement("ul");

    let timeP = document.createElement("p");
    
    let everyMonthP = document.createElement("p");
    let fromToM = document.createElement("span");
    
    let everyDayP = document.createElement("p");
    let fromToD = document.createElement("span");
    timeP.innerText = init + " -- " + end;
    
    h4.innerText = name;


    li.appendChild(h4);

    ul.appendChild(timeP);

    if (everyMonth) {
        everyMonthP.innerHTML = "Todos os meses <input type=\"checkbox\" name=\"everyMonth\"checked disabled>";
        ul.appendChild(everyMonthP);

    } else {
        everyMonthP.innerHTML = "Todos os meses <input type=\"checkbox\" name=\"everyMonth\" disabled>";
        fromToM.innerText = fromM + " -- " + toM;
        ul.appendChild(everyMonthP);
        ul.appendChild(fromToM);
    }

    if (everyDay) {
        everyDayP.innerHTML = "Todos os dias <input type=\"checkbox\" name=\"everyDay\" checked disabled>";
        ul.appendChild(everyDayP);
    } else {
        everyDayP.innerHTML = "Todos os dias <input type=\"checkbox\" name=\"everyDay\" disabled>";
        fromToD.innerText = fromD + " -- " + toD;
        ul.appendChild(everyDayP);
        ul.appendChild(fromToD);
    }

    li.appendChild(ul);
    listaRega.appendChild(li);

}

function toggleAddRega() {
    //elem = document.getElementById("rega");
    //elem.setAttribute("hidden", false);

    //elem = document.getElementById("addRega");
    //elem.setAttribute("hidden", false);


    hideToggleById("rega");
    hideToggleById("addRega");
}



