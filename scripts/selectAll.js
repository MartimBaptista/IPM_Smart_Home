//Ao selecionar uma checkbox "Selecionar todas" desativa a lista de opções possíveis de selecionar
function selectAllDisableList(idAll, idList){
    var isChecked = document.getElementById(idAll).checked;
    let checkBoxes = document.getElementById(idList).querySelectorAll("input[type=checkbox]");

    checkBoxes.forEach(element => {
        if(!element.checked && isChecked){
            element.checked = true;
        }else if(element.checked && !isChecked){
            element.checked = false
        }
        element.disabled=isChecked;
    });
}