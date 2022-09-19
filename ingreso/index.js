//?VENTANA EMERGENTE
const comoCargar = document.getElementById("comoCargar");
const modal_comoCargar = document.getElementById("modal_comoCargar");
const cerrar = document.getElementById("cerrar");
const extraerDinero = document.getElementById("extraerDinero");
const modal_extraerDinero = document.getElementById("modal_extraerDinero")
const cerrarExtraer = document.getElementById("cerrarExtraer")

comoCargar.addEventListener('click', () => {
  modal_comoCargar.classList.add('open_close');
});
cerrar.addEventListener('click', () => {
  modal_comoCargar.classList.remove('open_close');
});

extraerDinero.addEventListener('click', () => {
  modal_extraerDinero.classList.add('open_close');
});
cerrarExtraer.addEventListener('click', () => {
  modal_extraerDinero.classList.remove('open_close');
});

//!MENU
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});
navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

//*PRELOADER
const preloader = document.querySelector(".preloader");
window.addEventListener("load", ()=>{
  preloader.style.display = "none" ;
});