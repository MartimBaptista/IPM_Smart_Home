var noticationList = document.getElementById("notificationList");

function addNotification(par) {
    const text = document.createTextNode("- " + par);
    const item = document.createElement("li");
    const buttom = document.createElement("input");
    buttom.type = "button";
    buttom.value = "OK";
    buttom.addEventListener("click", removeNotification);
    item.appendChild(text);
    item.append(buttom);
    noticationList.appendChild(item);
}

function removeNotification() {
    this.parentElement.remove();
}