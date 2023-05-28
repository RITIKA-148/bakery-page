// const toggleBtn = document.querySelector(".sidebar-toggle");
// const closeBtn = document.querySelector(".close-btn");
// const sidebar = document.querySelector(".sidebar");

// toggleBtn.addEventListener("click", function () {
//   // if (sidebar.classList.contains("show-sidebar")) {
//   //   sidebar.classList.remove("show-sidebar");
//   // } else {
//   //   sidebar.classList.add("show-sidebar");
//   // }
//   sidebar.classList.toggle("show-sidebar");
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}