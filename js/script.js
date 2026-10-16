(function () {
  var btn = document.getElementById('btn-menu');
  var menu = document.getElementById('menu');
  var barra = document.getElementById('progreso');
  var arriba = document.getElementById('arriba');

  function cerrar() {
    menu.classList.remove('abierto');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Abrir menú';
  }
  btn.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', abierto);
    btn.textContent = abierto ? 'Cerrar menú' : 'Abrir menú';
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') cerrar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

  function alDesplazar() {
    var el = document.documentElement;
    var total = el.scrollHeight - el.clientHeight;
    barra.style.width = (total > 0 ? (el.scrollTop / total) * 100 : 0) + '%';
    arriba.hidden = el.scrollTop < 500;
  }
  window.addEventListener('scroll', alDesplazar, { passive: true });
  alDesplazar();

  arriba.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();
