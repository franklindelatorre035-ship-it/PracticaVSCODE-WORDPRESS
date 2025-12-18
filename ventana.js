window.load = () =>
  document.getElementById("popup-anuncio").classList.add("activo");

document.getElementById("cerrarPopup").onclick = () =>
  document.getElementById("popup-anuncio").classList.remove("activo");