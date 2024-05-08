// Navegación
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".navbar-nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            var navbarCollapse = document.querySelector(".navbar-collapse");
            navbarCollapse.classList.remove("show");
        });
    });
});

// Lee Más/Menos
$(document).ready(function () {
    $(".leer-mas").click(function (event) {
        event.preventDefault();
        $(this).prev(".sinopsis").toggle();
        var textoBoton = $(this).text();
        $(this).text(textoBoton === "Leer más..." ? "Leer menos..." : "Leer más...");
    });
});

// Animación Formulario
$(document).ready(function() {
    // Ocultar campos adicionales
    $("#confirmPasswordGroup").hide();
    $("#fechaNacimientoGroup").hide();
    $("#direccionGroup").hide();
    $("#codigoPostalGroup").hide();
    $("#ciudadGroup").hide();

    // Mostrar campos adicionales al hacer clic
    $("#btnRegistrar").click(function() {
        $("#confirmPasswordGroup").show();
        $("#fechaNacimientoGroup").show();
        $("#direccionGroup").show();
        $("#codigoPostalGroup").show();
        $("#ciudadGroup").show();
        $("#btnIniciarSesion").hide();
        $("#btnVolver").show();
    });

    // Volver a ocultar campos adicionales
    $("#btnVolver").click(function() {
        $("#confirmPasswordGroup").hide();
        $("#fechaNacimientoGroup").hide();
        $("#direccionGroup").hide();
        $("#codigoPostalGroup").hide();
        $("#ciudadGroup").hide();
        $("#btnIniciarSesion").show();
        $("#btnVolver").hide();
    });
});

// Canvas Logo
var lienzo = document.getElementById("logoCanvas");
var ctx = lienzo.getContext("2d");
var centroX = lienzo.width / 2;
var centroY = lienzo.height / 2;
var radioCirculo = 80;

var img = new Image();
img.src = 'images/logo.svg';

var aparecer = true;
var opacidad = 0;
var rotacion = 0;
var velocidadRotacion = 0.002;

function dibujarImagen() {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    ctx.globalAlpha = opacidad;
    ctx.translate(centroX, centroY);
    ctx.rotate(rotacion);
    ctx.drawImage(img, -radioCirculo, -radioCirculo, radioCirculo * 2, radioCirculo * 2);
    ctx.globalAlpha = 1;
    ctx.rotate(-rotacion);
    ctx.translate(-centroX, -centroY);
}

function animar() {
    requestAnimationFrame(animar);
    
    if (aparecer) {
        opacidad += 0.02;
        if (opacidad >= 1.2) {
            aparecer = false;
        }
    } else {
        opacidad -= 0.02;
        if (opacidad <= 0.2) {
            aparecer = true;
        }
    }
    
    rotacion = Math.sin(performance.now() * velocidadRotacion) * Math.PI / 6;

    dibujarImagen();
}

img.onload = function () {
    animar();
};

// Mostrar o ocultar botón volver arriba
window.addEventListener('scroll', function() {
    var flechaArriba = document.getElementById('volverArriba');
    if (window.scrollY > 700) {
        flechaArriba.style.display = 'block';
    } else {
        flechaArriba.style.display = 'none';
    }
});

// Desplazamiento al hacer clic en el botón
document.getElementById('volverArriba').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});