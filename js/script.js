/* =========================================================
   Proyecto: Repelente de mosquitos — 1.º BGU
   script.js — menú móvil, barra de progreso, botón "volver arriba"
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Menú móvil ---------- */
  var botonMenu = document.getElementById("botonMenu");
  var menuMovil = document.getElementById("menuMovil");

  if (botonMenu && menuMovil) {
    botonMenu.addEventListener("click", function () {
      var abierto = menuMovil.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
      botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    // Cierra el menú al tocar un enlace
    var enlacesMenu = menuMovil.querySelectorAll("a");
    enlacesMenu.forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        menuMovil.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  /* ---------- Barra de progreso de lectura ---------- */
  var barraProgreso = document.getElementById("barraProgreso");

  function actualizarBarraProgreso() {
    var alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    var progreso = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;
    if (barraProgreso) {
      barraProgreso.style.width = progreso + "%";
    }
  }

  /* ---------- Botón "volver arriba" ---------- */
  var botonArriba = document.getElementById("botonArriba");

  function actualizarBotonArriba() {
    if (!botonArriba) return;
    if (window.scrollY > 480) {
      botonArriba.classList.add("visible");
    } else {
      botonArriba.classList.remove("visible");
    }
  }

  if (botonArriba) {
    botonArriba.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", function () {
    actualizarBarraProgreso();
    actualizarBotonArriba();
  });

  // Estado inicial al cargar la página
  actualizarBarraProgreso();
  actualizarBotonArriba();

});
