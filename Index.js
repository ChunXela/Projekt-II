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

  let name = document.createElement("h3");
  name.classList.add("nameOfPost");
  let nameText = document.createTextNode("name of something");
  name.append(nameText);
  newName.append(name);

  document.getElementsByClassName("nameOfPost").innerHTML = "name of something";
  let img = document.createElement("img");
  img.classList.add("imageOfSomething");
  img.setAttribute("src", "2.jpg");
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
