let menuItems = document.querySelectorAll(".menu-items")
console.log(menuItems.length);
for(let i = 0;i<menuItems.length;i++){
    let currentDiv = menuItems[i];
    currentDiv.addEventListener("mouseover",() =>{
      $(currentDiv).addClass("mouseover"); 
 });
 
    currentDiv.addEventListener("mouseout",() =>{
     $(currentDiv).removeClass("mouseover"); 
  });
}