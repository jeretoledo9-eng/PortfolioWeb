const hamburguesa = document.getElementById("menu");
const enlaces = document.querySelectorAll("#nav-links a");

enlaces.forEach((link) => {
  link.addEventListener("click", (e) => {
    hamburguesa.checked = false;
  });
});
