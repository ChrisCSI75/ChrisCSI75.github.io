/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*var x = document.getElementById("topNav");

x.addEventListener("click", toggleMenu);

 function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }*/
  
  //function myFunction() {
  //const x = document.getElementById("navList");
  /*const y = document.getElementById("toggler");
  const z = document.getElementById("logo");*/
  //if (x.style.display === "none") {
   // x.style.display = "flex";
    /*x.style.display.float = "left";
    y.style.color = "green";
    z.style.display="none";*/
  //} else {
   // x.style.display = "none";
    /*y.style.color = "blue";
    z.style.display="flex";*/
  //}
//}

function myFunction() {
  const x = document.getElementById("topNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function myFunction2(y) {
  const x = document.getElementById("topNav");
  if (y.matches) {
    x.className = "navbar";
  }
}

var y = window.matchMedia("(min-width: 768px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes