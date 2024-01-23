let navbar = document.querySelector(".navbar");
let menuIcon = document.querySelector("#mnu");
let closebtn = document.querySelector("#close");
let mobMenu = document.querySelector(".mob-navbar")
menuIcon.addEventListener("click",() =>{
       mobMenu.style.display = "block";
       navbar.style.display = "none"
});
closebtn.addEventListener("click",() =>{
   navbar.style.display = "flex";
   mobMenu.style.display = "none";
});

