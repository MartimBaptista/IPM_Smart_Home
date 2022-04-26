var noticationList = document.getElementById("notificationList");

function addNotification(arg) {
    const text = document.createTextNode(arg);
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

//Adding a starting notification for case use
addNotification("Intruso detetado!!!");