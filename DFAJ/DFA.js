const boton = document.getElementById("boton");

const sorpresa = document.getElementById("sorpresa");

const portal = document.getElementById("portal");


boton.addEventListener("click", function () {

    portal.classList.add("activo");


    setTimeout(function () {

        sorpresa.classList.remove("oculto");

        boton.style.display = "none";


        setTimeout(function () {

            portal.classList.remove("activo");

        }, 500);


    }, 2000);

});