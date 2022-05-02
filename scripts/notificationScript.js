var noticationList = document.getElementById("notificationList");

function addNotification(_title, _desc) {

    //Title
    const title = document.createElement("a");
    title.appendChild(document.createTextNode(_title));
    title.className = "title";
    //Description
    const desc = document.createElement("a");
    desc.appendChild(document.createTextNode(_desc));
    desc.className = "desc";
    //Button
    const button = document.createElement("input");
    button.type = "button";
    button.addEventListener("click", removeNotification);
    //button.value = "OK";
    
    //Containers
    const gridText = document.createElement("div");
    gridText.className = "grid-text";
    gridText.appendChild(title);
    gridText.appendChild(desc);

    const gridButton = document.createElement("div");
    gridButton.className = "grid-button";
    gridButton.appendChild(button);

    const gridContainer = document.createElement("div");
    gridContainer.className = "grid-container";
    gridContainer.appendChild(gridText);
    gridContainer.appendChild(gridButton);

    const item = document.createElement("li");
    item.appendChild(gridContainer);
    
    //Adding it all up
    noticationList.appendChild(item);
}

function removeNotification() {
    this.parentElement.parentElement.parentElement.remove();
}

//Adding a starting notification for case use
addNotification("Intruso detetado!", "Um intruso foi detetado idk what else u want to know");

//