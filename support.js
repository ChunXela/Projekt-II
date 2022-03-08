var coll = document.getElementsByClassName("dropDownBtn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var helpUserClicked = this.nextElementSibling;
    if (helpUserClicked.style.display === "block") {
      helpUserClicked.style.display = "none";
    } else {
      helpUserClicked.style.display = "block";
    }
  });
} 