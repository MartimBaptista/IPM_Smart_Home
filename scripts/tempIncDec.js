function inc(idValue){
    var temp = document.getElementById(idValue);
    var value = temp.innerHTML;

    value++;
    temp.innerHTML=value;
}

function dec(idValue){
    var temp = document.getElementById(idValue);
    var value = temp.innerHTML;

    value--;
    temp.innerHTML=value;
}