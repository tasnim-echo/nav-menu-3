const dropdownItem = document.querySelector(".dropdown_item");
const dropdownMenu = document.querySelector(".dropdown_menu");
dropdownItem.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
  dropdownItem.classList.toggle("active-color");
});
