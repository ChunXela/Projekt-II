const BtnAdd = document.querySelector(".makePost");
const DivContainer = document.querySelector(".homePage");
const NavContainer = document.querySelector(".postArea");

BtnAdd.addEventListener("click", AddNew);
function AddNew() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("postArea");

  let newA = document.createElement("a");
  newDiv.append(newA);

  let newNav = document.createElement("nav");
  newNav.classList.add("box");
  newA.append(newNav);

  let newName = document.createElement("div");
  newName.classList.add("nameOfSomething");
  newNav.append(newName);

  var postName = ["Name of something", "Name something of", "Something name of", "something of name", "Of name something", "Of something name"];

  let name = document.createElement("h3");
  name.classList.add("nameOfPost");
  let nameText = document.createTextNode(postName[Math.floor(Math.random()*6)]);
  name.append(nameText);
  newName.append(name);

  var postImage = ["1.jpg", "2.jpg", "3.jpg" , "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg","11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg",];

  document.getElementsByClassName("nameOfPost").innerHTML = "name of something";
  let img = document.createElement("img");
  img.classList.add("imageOfSomething");
  img.setAttribute("src", postImage[Math.floor(Math.random()* 17)]);
  newNav.append(img);

  let reactionBox = document.createElement("div");
  reactionBox.classList.add("infoOfSomething");
  newNav.append(reactionBox);

  let like = document.createElement("nav");
  like.classList.add("likeButton");
  let likeText = document.createTextNode("Like");
  like.append(likeText);
  reactionBox.append(like);

  let favorite = document.createElement("nav");
  favorite.classList.add("favoriteButton");
  let favoriteText = document.createTextNode("favorite");
  favorite.append(favoriteText);
  reactionBox.append(favorite);

  document.querySelector("main").prepend(newDiv);
}
