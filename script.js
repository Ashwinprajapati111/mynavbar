// function openNav() {
//   document.getElementById("mySidenav").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

// //   START dropdown mobile menu
// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
//   END dropdown mobile menu

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
window.onscroll = function () {
    myscroll();
};
function myscroll() {
    var x = document.getElementById("myTopnav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    var x = document.getElementById("myTopnav").className = "myscroll";
  } else {
    x.className = "topnav";
  }
}
