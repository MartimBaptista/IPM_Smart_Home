var noticationList = document.getElementById("notificationList");

function addNotificationn() {
    const text = document.createTextNode("Notification Created by script");
    const item = document.createElement("li")
    item.appendChild(text);
    noticationList.appendChild(item);
}