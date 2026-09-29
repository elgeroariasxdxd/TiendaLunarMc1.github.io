// ==========================================================
// LunarMC - JavaScript principal
// ==========================================================


// ==========================================================
// 1. MENSAJE DE BIENVENIDA
// ==========================================================

window.addEventListener('DOMContentLoaded', function () {

    const mensajeBienvenida = "¡Bienvenido a la Tienda Oficial de LunarMC!";

    alert(mensajeBienvenida);

    console.log(mensajeBienvenida);

});


// ==========================================================
// 2. FECHA Y HORA EN TIEMPO REAL
// ==========================================================

function actualizarFechaHora() {

    const ahora = new Date();

    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();

    const fechaTexto = `${dia}/${mes}/${anio}`;

    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const horaTexto = `${horas}:${minutos}:${segundos}`;

    const reloj = document.getElementById('clock');

    if (reloj) {

        reloj.textContent = horaTexto;

    } else {

        const contenedorFecha =
            document.getElementById('datetime-banner');

        if (contenedorFecha) {

            contenedorFecha.innerHTML =
                `Fecha: ${fechaTexto} | Hora actual: <span id="clock">${horaTexto}</span>`;

        }

    }

}

actualizarFechaHora();

setInterval(actualizarFechaHora, 1000);


// ==========================================================
// 3. COPIAR IP
// ==========================================================

function copyIP() {

    const ip = 'lunarmc.cc';

    const btn = document.getElementById('copy-ip-btn');

    if (!btn) return;


    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(ip)

            .then(function () {

                mostrarEfectoCopiado(btn);

            })

            .catch(function (err) {

                console.error(
                    'Error con navigator.clipboard:',
                    err
                );

                copiarMetodoRespaldo(ip, btn);

            });

    } else {

        copiarMetodoRespaldo(ip, btn);

    }

}


function copiarMetodoRespaldo(texto, btn) {

    const textArea = document.createElement('textarea');

    textArea.value = texto;

    document.body.appendChild(textArea);

    textArea.select();

    try {

        document.execCommand('copy');

        mostrarEfectoCopiado(btn);

    } catch (err) {

        console.error(
            'Error al ejecutar método de respaldo:',
            err
        );

    }

    document.body.removeChild(textArea);

}


function mostrarEfectoCopiado(btn) {

    const textoOriginal =
        'IP: lunarmc.cc (Haz clic para copiar)';

    btn.innerText = '¡IP Copiada!';

    btn.style.borderColor = '#28a745';

    btn.style.color = '#28a745';


    setTimeout(function () {

        btn.innerText = textoOriginal;

        btn.style.borderColor = '#7289DA';

        btn.style.color = '';

    }, 2000);

}


// ==========================================================
// 4. ELEMENTOS INTERACTIVOS
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {


        // ======================================================
    // MODO CLARO / MODO OSCURO
    // ======================================================

    function actualizarTextoTema(btn) {
        if (!btn) return;

        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = '☀️ Modo Claro';
        } else {
            btn.textContent = '🌙 Modo Oscuro';
        }
    }

    // Actualizar el texto inicial del botón
    const toggleThemeBtn =
        document.getElementById('toggle-theme-btn');

    if (toggleThemeBtn) {
        actualizarTextoTema(toggleThemeBtn);
    }

    // Detectar el clic aunque el botón venga de header.php
    document.addEventListener('click', function (event) {
        const botonTema = event.target.closest('#toggle-theme-btn');

        if (!botonTema) return;

        event.preventDefault();

        document.body.classList.toggle('dark-mode');

        actualizarTextoTema(botonTema);
    });


    // ======================================================
    // BOTÓN DE COPIAR IP
    // ======================================================

    const btnIP =
        document.getElementById('copy-ip-btn');

    if (btnIP && !btnIP.getAttribute('onclick')) {

        btnIP.addEventListener('click', copyIP);

    }


    // ======================================================
    // VALIDACIÓN DEL FORMULARIO
    // ======================================================

    const btnSubmit =
        document.getElementById('btn-submit-form');

    const btnConfirm =
        document.getElementById('btn-confirm-send');


    if (btnSubmit) {

        btnSubmit.addEventListener('click', function () {

            const usernameInput =
                document.getElementById('username-input');

            const emailInput =
                document.getElementById('email-input');


            const username =
                usernameInput
                    ? usernameInput.value.trim()
                    : "";

            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            const usernameError =
                document.getElementById('username-error');

            const emailError =
                document.getElementById('email-error');


            let esValido = true;


            if (usernameError) {

                usernameError.textContent = "";

            }

            if (emailError) {

                emailError.textContent = "";

            }


            if (username === "") {

                if (usernameError) {

                    usernameError.textContent =
                        "El nombre de usuario no puede estar vacío.";

                }

                esValido = false;

            }


            const regexEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                if (emailError) {

                    emailError.textContent =
                        "El correo electrónico no puede estar vacío.";

                }

                esValido = false;

            } else if (!regexEmail.test(email)) {

                if (emailError) {

                    emailError.textContent =
                        "Por favor, ingresa un correo electrónico válido.";

                }

                esValido = false;

            }


            if (esValido) {

                const summaryUser =
                    document.getElementById('summary-username');

                const summaryMail =
                    document.getElementById('summary-email');

                const formSummary =
                    document.getElementById('form-summary');


                if (summaryUser) {

                    summaryUser.textContent =
                        "Usuario: " + username;

                }

                if (summaryMail) {

                    summaryMail.textContent =
                        "Correo: " + email;

                }

                if (formSummary) {

                    formSummary.style.display = "block";

                }

            }

        });

    }


    if (btnConfirm) {

        btnConfirm.addEventListener('click', function () {

            alert("¡Formulario enviado con éxito!");

            const formSummary =
                document.getElementById('form-summary');

            const userForm =
                document.getElementById('user-form');


            if (formSummary) {

                formSummary.style.display = "none";

            }

            if (userForm) {

                userForm.reset();

            }

        });

    }


    // ======================================================
    // ACORDEÓN
    // ======================================================

    const accordionBtns =
        document.querySelectorAll('.accordion-btn');


    accordionBtns.forEach(function (btn) {

        btn.addEventListener('click', function () {

            const content =
                this.nextElementSibling;

            if (content) {

                content.style.display =
                    content.style.display === "block"
                        ? "none"
                        : "block";

            }

        });

    });


    // ======================================================
    // GALERÍA
    // ======================================================

    const galleryImages = [

        "imagen del servidor lunar.png",

        "miniatura2.png",

        "miniatura3.png"

    ];


    let currentImgIndex = 0;


    const galleryDisplay =
        document.getElementById('gallery-display');

    const btnPrev =
        document.getElementById('btn-prev-img');

    const btnNext =
        document.getElementById('btn-next-img');

    const thumbnails =
        document.querySelectorAll(
            '.gallery-thumbnails .thumb'
        );


    function updateGallery(index) {

        currentImgIndex = index;


        if (galleryDisplay) {

            galleryDisplay.src =
                galleryImages[currentImgIndex];

        }


        thumbnails.forEach(function (thumb, i) {

            thumb.style.borderColor =
                i === currentImgIndex
                    ? "#7289DA"
                    : "#2D323F";

        });

    }


    if (btnNext && btnPrev) {

        btnNext.onclick = function (e) {

            e.preventDefault();

            currentImgIndex =
                (currentImgIndex + 1)
                % galleryImages.length;

            updateGallery(currentImgIndex);

        };


        btnPrev.onclick = function (e) {

            e.preventDefault();

            currentImgIndex =
                (currentImgIndex - 1 + galleryImages.length)
                % galleryImages.length;

            updateGallery(currentImgIndex);

        };

    }


    thumbnails.forEach(function (thumb, index) {

        thumb.addEventListener('click', function () {

            updateGallery(index);

        });

    });


    // ======================================================
    // INFORMACIÓN DE LOS RANGOS
    // ======================================================

    const datosRangos = {

        sun: {

            titulo: "SUN",

            imagen: "sun rango.png",

            precioOld: "9.97",

            precio: "2.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo SUN en tu nombre del Chat.</li>

                        <li>👑 Prefijo SUN en tu nombre del Tabulador.</li>

                        <li>👑 Rol SUN en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 1 mochila virtual.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas de rango sun.png"
                            alt="Recompensas del rango SUN"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo SUN en Chat.</li>

                        <li>👑 Prefijo SUN en Tabulador.</li>

                        <li>👑 Rol SUN en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit SUN</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp SUN</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp SUN</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina sun.png"
                            alt="Mina del rango SUN"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        },


        venus: {

            titulo: "VENUS",

            imagen: "rango venus.png",

            precioOld: "19.97",

            precio: "5.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo VENUS en tu nombre del Chat.</li>

                        <li>👑 Prefijo VENUS en tu nombre del Tabulador.</li>

                        <li>👑 Rol VENUS en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 2 mochilas virtuales.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas de rango venus.png"
                            alt="Recompensas del rango VENUS"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo VENUS en Chat.</li>

                        <li>👑 Prefijo VENUS en Tabulador.</li>

                        <li>👑 Rol VENUS en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit VENUS</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp VENUS</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp VENUS</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina venus.png"
                            alt="Mina del rango VENUS"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        },


        venus_plus: {

            titulo: "VENUS+",

            imagen: "rango venus+.png",

            precioOld: "33.30",

            precio: "9.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo VENUS+ en tu nombre del Chat.</li>

                        <li>👑 Prefijo VENUS+ en tu nombre del Tabulador.</li>

                        <li>👑 Rol VENUS+ en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 3 mochilas virtuales.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas rango venus plus.png"
                            alt="Recompensas del rango VENUS+"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo VENUS+ en Chat.</li>

                        <li>👑 Prefijo VENUS+ en Tabulador.</li>

                        <li>👑 Rol VENUS+ en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit VENUS+</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp VENUS+</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp VENUS+</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina venus +.png"
                            alt="Mina del rango VENUS+"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        },


        nova: {

            titulo: "NOVA",

            imagen: "rango nova.png",

            precioOld: "49.97",

            precio: "14.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo NOVA en tu nombre del Chat.</li>

                        <li>👑 Prefijo NOVA en tu nombre del Tabulador.</li>

                        <li>👑 Rol NOVA en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 3 mochilas virtuales.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas nova.png"
                            alt="Recompensas del rango NOVA"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo NOVA en Chat.</li>

                        <li>👑 Prefijo NOVA en Tabulador.</li>

                        <li>👑 Rol NOVA en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit NOVA</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp NOVA</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp NOVA</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina nova.png"
                            alt="Mina del rango NOVA"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        },


        lunar: {

            titulo: "LUNAR",

            imagen: "rango lunar.png",

            precioOld: "56.63",

            precio: "16.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo LUNAR en tu nombre del Chat.</li>

                        <li>👑 Prefijo LUNAR en tu nombre del Tabulador.</li>

                        <li>👑 Rol LUNAR en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 3 mochilas virtuales.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas lunar.png"
                            alt="Recompensas del rango LUNAR"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo LUNAR en Chat.</li>

                        <li>👑 Prefijo LUNAR en Tabulador.</li>

                        <li>👑 Rol LUNAR en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit LUNAR</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp LUNAR</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp LUNAR</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina lunar.png"
                            alt="Mina del rango LUNAR"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        },


        summer: {

            titulo: "SUMMER",

            imagen: "rango summer.png",

            precioOld: "69.97",

            precio: "20.99",

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        RANGO PERMANENTE
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo SUMMER en tu nombre del Chat.</li>

                        <li>👑 Prefijo SUMMER en tu nombre del Tabulador.</li>

                        <li>👑 Rol SUMMER en nuestro Discord.</li>

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>💎 Acceso a una mina VIP exclusiva.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        QUE GANAS
                    </div>

                    <ul class="rank-info-list">

                        <li>💎 Recompensas diarias de tu rango.</li>

                        <li>💎 Kit especial de tu rango.</li>

                        <li>✅ Todos los Kill Effects.</li>

                        <li>⚡ Acceso a 3 mochilas virtuales.</li>

                    </ul>


                    <div class="rank-media-box">

                        <img
                            src="recompensas summer.png"
                            alt="Recompensas del rango SUMMER"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        ESTATUS
                    </div>

                    <ul class="rank-info-list">

                        <li>👑 Prefijo SUMMER en Chat.</li>

                        <li>👑 Prefijo SUMMER en Tabulador.</li>

                        <li>👑 Rol SUMMER en Discord.</li>

                        <li>⚡ Prioridad en la cola.</li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            ⚡ <code>/feed</code> para saciar el hambre.
                        </li>

                        <li>
                            ⚡ <code>/near</code> para ver jugadores cercanos.
                        </li>

                        <li>
                            ⚡ <code>/ec</code> para abrir el EnderChest remotamente.
                        </li>

                        <li>
                            ⭐ <code>/kit SUMMER</code> para reclamar el kit exclusivo.
                        </li>

                        <li>
                            ⭐ <code>/warp SUMMER</code> para acceder a la mina exclusiva.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        MINA EXCLUSIVA
                    </div>

                    <p class="rank-info-text">

                        ⭐ Acceso a la mina exclusiva de tu rango:
                        <code>/warp SUMMER</code>

                    </p>

                    <div class="rank-media-box">

                        <img
                            src="mina summer.png"
                            alt="Mina del rango SUMMER"
                            class="rank-detail-image"
                        >

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto,
                        automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `

        }

    };


    // ======================================================
    // ABRIR MODAL DE RANGO
    // ======================================================

    window.abrirModalRango = function (idRango) {

        const info =
            datosRangos[idRango];

        const modal =
            document.getElementById('info-modal');

        const imgElem =
            document.getElementById('modal-img');

        const titleElem =
            document.getElementById('modal-title');

        const oldPriceElem =
            document.getElementById('modal-price-old');

        const priceElem =
            document.getElementById('modal-price');

        const contentElem =
            document.getElementById('modal-details-content');


        if (!info || !modal) {

            console.error(
                'LunarMC: no existe el rango o el modal:',
                idRango
            );

            return;

        }


        if (imgElem) {

            imgElem.src =
                info.imagen;

            imgElem.alt =
                'Rango ' + info.titulo;

        }


        if (titleElem) {

            titleElem.textContent =
                info.titulo;

        }


        if (oldPriceElem) {

            oldPriceElem.textContent =
                info.precioOld;

        }


        if (priceElem) {

            priceElem.textContent =
                info.precio;

        }


        if (contentElem) {

            contentElem.innerHTML =
                info.contenidoHTML;

        }


        modal.classList.add('active');

        modal.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.style.overflow =
            'hidden';

    };


    // ======================================================
    // CERRAR MODAL
    // ======================================================

    window.cerrarModalRango = function () {

        const modal =
            document.getElementById('info-modal');


        if (modal) {

            modal.classList.remove('active');

            modal.setAttribute(
                'aria-hidden',
                'true'
            );

            document.body.style.overflow =
                '';

        }

    };


    // ======================================================
    // BOTONES DE INFORMACIÓN
    // ======================================================

    const botonesInfo =
        document.querySelectorAll('.btn-info');


    botonesInfo.forEach(function (boton) {

        boton.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const idRango =
                    boton.getAttribute(
                        'data-rango'
                    );


                if (idRango) {

                    window.abrirModalRango(
                        idRango
                    );

                }

            }
        );

    });


    // ======================================================
    // BOTÓN CERRAR
    // ======================================================

    const botonCerrarModal =
        document.getElementById(
            'btn-close-modal'
        );


    if (botonCerrarModal) {

        botonCerrarModal.addEventListener(
            'click',
            function () {

                window.cerrarModalRango();

            }
        );

    }


    // ======================================================
    // CERRAR HACIENDO CLICK FUERA
    // ======================================================

    const modal =
        document.getElementById(
            'info-modal'
        );


    if (modal) {

        modal.addEventListener(
            'click',
            function (event) {

                if (
                    event.target === modal
                ) {

                    window.cerrarModalRango();

                }

            }
        );

    }

});


// ==========================================================
// CERRAR MODAL CON ESC
// ==========================================================

window.addEventListener(
    'keydown',
    function (event) {

        if (
            event.key === 'Escape' &&
            typeof window.cerrarModalRango === 'function'
        ) {

            window.cerrarModalRango();

        }

    }
);
// ==========================================================
// EXTRAS - INFORMACIÓN EN MODAL
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

    const datosExtras = {

        // ==================================================
        // TAGS
        // ==================================================
        tags: {

            titulo: 'TAGS',

            imagen: 'imagen de tags.png',

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        INFORMACIÓN
                    </div>

                    <p class="rank-info-text">
                        🚀 ¡Te presentamos los TAGS de LUNARMC Network!
                    </p>

                    <ul class="rank-info-list">

                        <li>
                            💎 Obtendrás todos los TAGS disponibles.
                        </li>

                        <li>
                            ✅ Usa el comando
                            <code>/tag</code>
                            para ver todos los tags.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        TAGS LUNARMC
                    </div>

                    <div class="extra-media-grid">

                        <div class="rank-media-box">

                            <img
                                src="tags de lunarmc 2.png"
                                alt="Tags de LunarMC"
                                class="rank-detail-image"
                            >

                        </div>


                        <div class="rank-media-box">

                            <img
                                src="tags de lunar mc.png"
                                alt="Tags de LunarMC"
                                class="rank-detail-image"
                            >

                        </div>

                    </div>

                </section>


                <section class="rank-info-section terms-section">

                    <div class="rank-pixel-heading">
                        TÉRMINOS Y CONDICIONES
                    </div>

                    <p class="rank-info-text">
                        Al comprar este producto, automáticamente aceptas lo siguiente:
                    </p>

                    <ul class="rank-info-list warning-list">

                        <li>
                            ⚠️ Confirmas haber leído los términos y condiciones.
                        </li>

                        <li>
                            ⚠️ Entiendes que no se aceptarán reembolsos
                            bajo ninguna circunstancia.
                        </li>

                        <li>
                            ⚠️ Reconoces que el producto es personal e intransferible.
                        </li>

                        <li>
                            ⚠️ Certificas haber revisado todas las funciones
                            del producto y que cumplen tus expectativas.
                        </li>

                    </ul>

                </section>

            `
        },


        // ==================================================
        // KILL EFFECTS
        // ==================================================
        kill_effects: {

            titulo: 'KILL EFFECTS',

            imagen: 'imagen de kill efects.png',

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        INFORMACIÓN
                    </div>

                    <p class="rank-info-text">
                        🚀 ¡Te presentamos los Kill Effects de LUNARMC Network!
                    </p>

                    <ul class="rank-info-list">

                        <li>
                            💎 Obtendrás todos los KILL EFFECTS.
                        </li>

                        <li>
                            ✅ Usa el comando
                            <code>/killeffects</code>
                            para ver la lista completa.
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        COMANDOS
                    </div>

                    <ul class="rank-info-list extra-command-list">

                        <li>
                            <code>/betterkill set totem</code>
                            — Aparecerá un totem en tu pantalla.
                        </li>

                        <li>
                            <code>/betterkill set totem_particle</code>
                            — Aparecerán las partículas del totem.
                        </li>

                        <li>
                            <code>/betterkill set ray</code>
                            — Aparecerá un rayo en tu pantalla.
                        </li>

                        <li>
                            <code>/betterkill set angel</code>
                            — Aparecerá una corona de ángel en tu cabeza.
                        </li>

                        <li>
                            <code>/betterkill set demon</code>
                            — Aparecerá una corona de demonio en tu cabeza.
                        </li>

                    </ul>

                </section>

            `
        },


        // ==================================================
        // LLAVE TODO O NADA
        // ==================================================
        llave_todo_o_nada: {

            titulo: 'LLAVE TODO O NADA',

            imagen: 'llave todo o nada.png',

            contenidoHTML: `

                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        INFORMACIÓN
                    </div>

                    <p class="rank-info-text">
                        🔑 Al comprar este paquete recibirás 1 llave TODO O NADA
                        que podrás canjear en la crate todo o nada.
                    </p>

                    <p class="rank-info-text">
                        ⚠️ Recuerda que debes tener al menos 1 espacio libre
                        en el inventario para poder recibir esta llave.
                    </p>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        PROBABILIDADES
                    </div>

                    <ul class="rank-info-list">

                        <li>
                            🏆 Rango Summer:
                            <strong>50%</strong>
                        </li>

                        <li>
                            ❌ Nada:
                            <strong>50%</strong>
                        </li>

                    </ul>

                </section>


                <section class="rank-info-section">

                    <div class="rank-pixel-heading">
                        DETALLES
                    </div>

                    <div class="extra-media-grid">

                        <div class="rank-media-box">

                            <img
                                src="llave todo o nada.png"
                                alt="Llave Todo o Nada"
                                class="rank-detail-image"
                            >

                        </div>


                        <div class="rank-media-box">

                            <img
                                src="llave todo o nada 50.png"
                                alt="imagen de la probabilidad de la llave todo o nada"
                                class="rank-detail-image"
                            >

                        </div>

                    </div>

                </section>

            `
        }

    };


    // ======================================================
    // ABRIR MODAL DE EXTRA
    // ======================================================

    window.abrirModalExtra = function (idExtra) {

        const info = datosExtras[idExtra];

        const modal =
            document.getElementById('info-modal');

        const imgElem =
            document.getElementById('modal-img');

        const titleElem =
            document.getElementById('modal-title');

        const oldPriceElem =
            document.getElementById('modal-price-old');

        const priceElem =
            document.getElementById('modal-price');

        const pricingElem =
            document.querySelector('#info-modal .modal-pricing');

        const contentElem =
            document.getElementById('modal-details-content');


        if (!info || !modal) {

            console.error(
                'LunarMC: no existe información para el extra:',
                idExtra
            );

            return;
        }


        if (imgElem) {

            imgElem.src =
                info.imagen;

            imgElem.alt =
                'Extra ' + info.titulo;

        }


        if (titleElem) {

            titleElem.textContent =
                info.titulo;

        }


        if (oldPriceElem) {

            oldPriceElem.textContent =
                '';

        }


        if (priceElem) {

            priceElem.textContent =
                '';

        }


        /*
         * Los archivos originales de Extras
         * no proporcionan precios.
         */
        if (pricingElem) {

            pricingElem.style.display =
                'none';

        }


        if (contentElem) {

            contentElem.innerHTML =
                info.contenidoHTML;

        }


        modal.classList.add('active');

        modal.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.style.overflow =
            'hidden';

    };


    // ======================================================
    // BOTONES ⓘ DE EXTRAS
    // ======================================================

    const botonesExtra =
        document.querySelectorAll('.btn-extra-info');


    botonesExtra.forEach(function (boton) {

        boton.addEventListener(
            'click',
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const idExtra =
                    boton.getAttribute(
                        'data-extra'
                    );


                if (idExtra) {

                    window.abrirModalExtra(
                        idExtra
                    );

                }

            }
        );

    });


    // ======================================================
    // CERRAR MODAL
    // ======================================================

    const modalExtra =
        document.getElementById('info-modal');

    const botonCerrarExtra =
        document.getElementById('btn-close-modal');


    if (botonCerrarExtra) {

        botonCerrarExtra.addEventListener(
            'click',
            function () {

                if (
                    typeof window.cerrarModalRango ===
                    'function'
                ) {

                    window.cerrarModalRango();

                } else if (modalExtra) {

                    modalExtra.classList.remove(
                        'active'
                    );

                    modalExtra.setAttribute(
                        'aria-hidden',
                        'true'
                    );

                    document.body.style.overflow =
                        '';

                }

            }
        );

    }


    // ======================================================
    // CERRAR HACIENDO CLICK FUERA
    // ======================================================

    if (modalExtra) {

        modalExtra.addEventListener(
            'click',
            function (event) {

                if (
                    event.target === modalExtra
                ) {

                    if (
                        typeof window.cerrarModalRango ===
                        'function'
                    ) {

                        window.cerrarModalRango();

                    } else {

                        modalExtra.classList.remove(
                            'active'
                        );

                        modalExtra.setAttribute(
                            'aria-hidden',
                            'true'
                        );

                        document.body.style.overflow =
                            '';

                    }

                }

            }
        );

    }

});