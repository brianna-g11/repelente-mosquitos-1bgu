# Ojo con el zumbido — Blog educativo sobre el uso adecuado del repelente

Proyecto de investigación de **Primero de Bachillerato General Unificado (1.º BGU)**
de la **Unidad Educativa de las Fuerzas Armadas Liceo Naval de Guayaquil
«Cmdte. Rafael Andrade Lalama»**.

- **Estudiante:** Brianna Guaño
- **Curso y paralelo:** 1.º BGU «Bravo»
- **Docente responsable:** Lcdo. Ricardo Jiménez
- **Fecha de realización:** 23/09/2026

## Descripción

Blog de una sola página (*one-page*) que explica, con base en fuentes de salud
pública, cómo usar correctamente el repelente contra mosquitos: por qué es
importante en el contexto de Guayaquil (dengue, zika y chikunguña), qué tipos
de repelente existen, el modo de aplicación correcto, las precauciones según
la edad, mitos frecuentes y buenas prácticas complementarias.

## Estructura del proyecto

```
Proyecto-repelente-mosquitos/
├── index.html          → página única del blog (todas las secciones)
├── css/
│   └── estilos.css     → estilos visuales del sitio
├── js/
│   └── script.js       → menú móvil, barra de progreso, botón "volver arriba"
├── img/
│   └── LEEME.txt        → guía para agregar las fotografías reales
└── README.md            → este archivo
```

## Cómo verlo

No necesita instalación ni servidor. Basta con abrir `index.html` con
cualquier navegador (doble clic sobre el archivo, o clic derecho →
"Abrir con" → tu navegador).

## Cómo personalizarlo

- **Textos:** edita directamente `index.html`; cada sección tiene un
  comentario o encabezado claro (`<h2>`) que indica de qué tema trata.
- **Colores y tipografías:** todos los valores están centralizados como
  variables al inicio de `css/estilos.css` (bloque `:root`), así que se
  pueden cambiar los colores del sitio modificando solo esas líneas.
- **Fotografías:** sigue la guía incluida en `img/LEEME.txt` para agregar
  imágenes reales tomadas o seleccionadas por el grupo.
- **Fuentes bibliográficas:** completa la sección "Fuentes" en
  `index.html` con las referencias en formato APA usadas en la
  investigación.

## Funcionalidades incluidas (`js/script.js`)

- **Menú móvil:** botón de hamburguesa que despliega la navegación en
  pantallas pequeñas.
- **Barra de progreso de lectura:** franja en la parte superior que
  avanza según cuánto se ha desplazado por la página.
- **Botón "volver arriba":** aparece al bajar en la página y regresa
  suavemente al inicio.

## Créditos

Proyecto elaborado con fines educativos por estudiantes de 1.º BGU del
Liceo Naval de Guayaquil «Cmdte. Rafael Andrade Lalama», como parte de
una investigación sobre salud preventiva y enfermedades transmitidas
por mosquitos en la costa ecuatoriana.
