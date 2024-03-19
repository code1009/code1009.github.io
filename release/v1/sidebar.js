
function sidebar_initialize() {
var i;

var collection = document.getElementsByClassName("collapsible");

for (i = 0; i < collection.length; i++) {

collection[i].addEventListener("click", 

function() {

this.classList.toggle("active");


var content = this.nextElementSibling;

if (content.style.display === "block") {
content.style.display = "none";
} else {
content.style.display = "block";
}

}

);

}
}


window.onload = function () {
//sidebar_initialize();
}
