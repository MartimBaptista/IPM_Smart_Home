function hideToggleById(id) {
    const elem = document.getElementById(id);

    if (elem.getAttribute("hidden") != null) {
        elem.removeAttribute("hidden");
    } else {
        elem.setAttribute("hidden", true);
    }
}

function hideToggleByClass(className) {
    elem = document.getElementsByClassName(className);
    elem = Array.from(elem);
    elem.forEach(element => {
        if (element.getAttribute("hidden") != null) {
            element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", true);
        }
    });
    
}