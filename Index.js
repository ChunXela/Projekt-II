const BtnAdd = document.querySelector(".makePost");
const DivContainer = document.querySelector(".homePage");
const NavContainer = document.querySelector(".postArea");

BtnAdd.addEventListener("click",AddNew);


function AddNew(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("postArea");
    let newA = document.createElement("a")
    newDiv.append(newA);
    let newNav = document.createElement("nav");
    newNav.classList.add("box");
    newA.append(newNav);
    let newName = document.createElement("div");
    newName.classList.add("nameofsomething");
    newNav.append(newName);
    let name = document.createElement("h3");
    name.classList.add("nameofPost");
    let nameText = document.createTextNode("name of something");
    name.append(nameText);
    newName.append(name);
    document.getElementsByClassName("nameofPost").innerHTML = "name of something";
    let img = document.createElement("img");
    img.classList.add("imageofsomething");
    img.setAttribute("src", "external-content.duckduckgo.com.jpg")
    newNav.append(img);

    document.querySelector("main").prepend(newDiv);
}
