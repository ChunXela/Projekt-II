const BtnAdd = document.querySelector(".makePost");
const DivContainer = document.getElementById("postArea")
const BtnAdd2 = document.querySelector(".postArea");
const NavContainer = document.getElementById("box")

BtnAdd2.addEventListener("click",NewNav);
BtnAdd.addEventListener("click",AddNew);


function AddNew(){
    const newDiv = document.createElement("div");
    console.log("Div");
    newDiv.classList.add("postArea")
    DivContainer.appendChild(newDiv);
}

function NewNav(){
    const newNav = document.createElement("nav");
    console.log("nav");
    newNav.classList.add("box")
    NavContainer.appendChild(newNav);

}