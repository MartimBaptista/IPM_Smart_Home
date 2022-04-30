var noticationList = document.getElementById("notificationList");

function addNotification(arg) {
    const text = document.createTextNode(arg);
    const item = document.createElement("li");
    const button1 = document.createElement("input");
    button1.type = "button";
    button1.value = "Sim";
    button1.addEventListener("click", removeNotification);

    const button2 = document.createElement("input");
    button2.type = "button";
    button2.value = "Não";
    button2.addEventListener("click", removeNotification);
    
    
    item.appendChild(text);
    item.append(button1);
    item.append(button2);
    noticationList.appendChild(item);
}

function removeNotification() {
    this.parentElement.remove();
}

//Adding a starting notification for case use
addNotification("Intruso detetado! Chamar autoridades?");