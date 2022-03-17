const BtnAdd = document.querySelector(".makePost");
const DivContainer = document.querySelector(".homePage");
const NavContainer = document.querySelector(".postArea");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("postArea Reveal");

  let newA = document.createElement("a");
  newDiv.append(newA);

  let newNav = document.createElement("nav");
  newNav.classList.add("box");
  newA.append(newNav);

  let newName = document.createElement("div");
  newName.classList.add("nameOfSomething");
  newNav.append(newName);

  var postName = [
    "Name of something",
    "Name something of",
    "Something name of",
    "something of name",
    "Of name something",
    "Of something name",
  ];

  let name = document.createElement("h3");
  name.classList.add("nameOfPost");
  let nameText = document.createTextNode(
    postName[Math.floor(Math.random() * 6)]
  );
  name.append(nameText);
  newName.append(name);

  var postImage = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
    "./Images/5.jpg",
    "./Images/7.jpg",
    "./Images/8.jpg",
    "./Images/9.jpg",
    "./Images/10.jpg",
    "./Images/11.jpg",
    "./Images/12.jpg",
    "./Images/13.jpg",
    "./Images/14.jpg",
    "./Images/15.jpg",
    "./Images/16.jpg",
    "./Images/17.jpg",
  ];

  document.getElementsByClassName("nameOfPost").innerHTML = "name of something";

  let img = document.createElement("img");
  img.classList.add("imageOfSomething");
  img.setAttribute("src", postImage[Math.floor(Math.random() * 16)]);
  img.setAttribute("alt", "The image that shows what the post is :)");
  newNav.append(img);

  let reactionBox = document.createElement("div");
  reactionBox.classList.add("infoOfSomething");
  newNav.append(reactionBox);

  let likeImg = document.createElement("img");
  likeImg.classList.add("likeImage");
  likeImg.setAttribute("src", "Images/noReaction.png");
  likeImg.setAttribute("alt", "Not Liked");
  likeImg.setAttribute("data-active", "false");
  likeImg.addEventListener("click", (e) => {
    if (likeImg.getAttribute("data-active") === "true") {
      likeImg.setAttribute("data-active", "false");
      likeImg.setAttribute("src", "Images/noReaction.png");
      likeImg.setAttribute("alt", "Not Liked");
    } else {
      likeImg.setAttribute("data-active", "true");
      likeImg.setAttribute("src", "./Images/reaction.png");
      likeImg.setAttribute("alt", "Liked");
    }
  });
  reactionBox.append(likeImg);

  let favorite = document.createElement("nav");
  favorite.classList.add("shareButton");
  let favoriteText = document.createTextNode("Share");
  favorite.append(favoriteText);
  reactionBox.append(favorite);

  document.querySelector("main").prepend(newDiv);
}
