const dropdownItem = document.querySelector(".dropdown_item");
const dropdownMenu = document.querySelector(".dropdown_menu");
dropdownItem.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
  dropdownItem.classList.toggle("active-color");
});

const mobileData = document.querySelector(".nav_data");
const navMenu = document.querySelector(".nav_menu");

mobileData.addEventListener("click", function () {
  mobileData.classList.toggle("show_icon");

  navMenu.classList.toggle("show_menu");
});
