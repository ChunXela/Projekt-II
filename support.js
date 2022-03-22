var coll = document.getElementsByClassName("expandDiv");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var questionsAndAnswers = this.nextElementSibling;
    if (questionsAndAnswers.style.display === "block") {
      questionsAndAnswers.style.display = "none";
    } else {
      questionsAndAnswers.style.display = "block";
    }
  });
}
