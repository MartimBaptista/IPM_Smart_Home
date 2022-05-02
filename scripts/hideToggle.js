function hideToggleById(id) {
    const elem = document.getElementById(id);

    if (elem.getAttribute("hidden") != null) {
        elem.removeAttribute("hidden");
    } else {
        elem.setAttribute("hidden", true);
    }
}