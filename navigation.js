let navBar = document.createElement("ul");
let node1 = document.createElement("li");
let node2 = document.createElement("li");
let node3 = document.createElement("li");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");

let homeNode = document.createTextNode("Home");
a1.appendChild(homeNode);
a1.href = "home.html";
node1.appendChild(a1);
let projectNode = document.createTextNode("Project List");
a2.appendChild(projectNode);
a2.href = "projectList.html";
node2.appendChild(a2);
let meNode = document.createTextNode("About Me");
a3.appendChild(meNode);
a3.href = "";
node3.appendChild(a3);

navBar.appendChild(node1);
navBar.appendChild(node2);
navBar.appendChild(node3);
document.getElementById("navigation").appendChild(navBar);