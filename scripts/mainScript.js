startTime();
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    h = addZero(h);
    m = addZero(m);
    document.getElementById("clock").innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}