let footerDiv = document.createElement("div");
let footerP = document.createElement("p");
let para = document.createTextNode("Copyright &copy; Luke Montgomery 2019")
footerP.appendChild(para);
//footerP.classList("m-0 text-center text-white");
//footerDiv.classList("container");

footerDiv.appendChild(footerP);
document.getElementById("footer").appendChild(footerDiv);