<?php
require_once __DIR__ . '/config.php';
?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        Preguntas Frecuentes -
        <?php echo defined('APP_NAME') ? APP_NAME : 'LunarMC Network'; ?>
    </title>

    <link rel="stylesheet" href="index-.css">

</head>

<body class="dark-mode">

<?php include __DIR__ . '/includes/header.php'; ?>


<main class="faq-page">


    <!-- =====================================================
         QUIÉNES SOMOS
         ===================================================== -->

    <section class="faq-about">

        <div class="faq-section-heading">

            <span class="faq-icon">
                🌙
            </span>

            <div>

                <span class="faq-label">
                    CONOCE NUESTRA COMUNIDAD
                </span>

                <h1>
                    ¿QUIÉNES SOMOS?
                </h1>

            </div>

        </div>


        <div class="faq-about-content">

            <p>
                En LUNARMC.CC no solo vendemos rangos; creamos
                experiencias épicas. Somos una comunidad apasionada
                por Minecraft que entiende lo que los jugadores buscan:
                exclusividad, reconocimiento y, sobre todo, mucha diversión.
            </p>

            <p>
                Nuestra tienda fue diseñada para ofrecer a cada usuario
                la posibilidad de personalizar su aventura. Desde el
                brillo solar del rango SUN hasta el prestigio místico
                del rango LUNAR, nuestro objetivo es recompensar tu
                lealtad y apoyo al servidor con beneficios que realmente
                marquen la diferencia en tu gameplay.
            </p>

            <p>
                Creemos en la transparencia y en el crecimiento constante,
                por eso cada moneda invertida aquí se reinvierte directamente
                en mejorar nuestros sistemas, reducir el lag y traer
                contenido nuevo cada semana.
            </p>

            <div class="faq-thanks">
                ¡Gracias por ser parte de nuestra historia!
            </div>

        </div>

    </section>



    <!-- =====================================================
         FAQ
         ===================================================== -->

    <section class="faq-section">

        <div class="faq-title">

            <span class="faq-label">
                AYUDA Y SOPORTE
            </span>

            <h2>
                Preguntas Frecuentes
            </h2>

            <p>
                Aquí encontrarás respuestas a las dudas más comunes
                sobre rangos, compras, mejoras y soporte.
            </p>

        </div>


        <div class="faq-list">


            <!-- PREGUNTA 1 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        01
                    </span>

                    <h3>
                        ¿Cuánto tiempo tarda en activarse mi rango
                        después de la compra?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        La mayoría de los rangos (SUN, VENUS, NOVA, etc.)
                        se activan de forma automática en un plazo de
                        5 a 15 minutos. Asegúrate de estar conectado
                        al servidor al momento de realizar la compra
                        para evitar retrasos.
                    </p>

                </div>

            </article>


            <!-- PREGUNTA 2 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        02
                    </span>

                    <h3>
                        ¿Los rangos son permanentes o mensuales?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        Todos nuestros rangos principales son permanentes,
                        a excepción del rango SUMMER, que es una edición
                        especial de temporada. Una vez que adquieres un
                        rango, conservas tus beneficios para siempre.
                    </p>

                </div>

            </article>


            <!-- PREGUNTA 3 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        03
                    </span>

                    <h3>
                        ¿Qué pasa si ya tengo VENUS y quiero comprar
                        VENUS+ o LUNAR?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        ¡No hay problema! Nuestro sistema detecta
                        automáticamente tu rango actual y solo te
                        cobrará la diferencia de precio. A esto le
                        llamamos "Upgrade", y es la mejor forma de
                        escalar posiciones en el servidor.
                    </p>

                </div>

            </article>


            <!-- PREGUNTA 4 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        04
                    </span>

                    <h3>
                        ¿Cómo funcionan las Llaves Todo o Nada?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        Es nuestra modalidad más emocionante. Al usar
                        la Llave Todo o Nada, entras en un sorteo
                        instantáneo donde puedes multiplicar el valor
                        de tu compra con premios increíbles o, como
                        dice el nombre, perder la apuesta. ¡Solo para
                        los más valientes!
                    </p>

                </div>

            </article>


            <!-- PREGUNTA 5 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        05
                    </span>

                    <h3>
                        ¿Puedo regalarle un Tag a un amigo?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        ¡Sí! Al momento de realizar el pago en la tienda,
                        asegúrate de ingresar el Nick (nombre de usuario)
                        de la persona que recibirá el Tag. Es un regalo
                        perfecto para tu compañero de facción o equipo.
                    </p>

                </div>

            </article>


            <!-- PREGUNTA 6 -->

            <article class="faq-item">

                <div class="faq-question">

                    <span class="faq-number">
                        06
                    </span>

                    <h3>
                        ¿Qué hago si mi compra no llega?
                    </h3>

                </div>

                <div class="faq-answer">

                    <p>
                        No te preocupes, contamos con un equipo de
                        soporte activo. Si pasan más de 30 minutos y
                        no has recibido tu objeto o rango, abre un
                        ticket en nuestro Discord oficial con tu
                        comprobante de pago y te ayudaremos de inmediato.
                    </p>

                </div>

            </article>


        </div>

    </section>



    <!-- =====================================================
         CONTACTO
         ===================================================== -->

    <section class="faq-contact">

        <div class="faq-contact-icon">
            💬
        </div>

        <div class="faq-contact-content">

            <span class="faq-label">
                ¿NECESITAS AYUDA?
            </span>

            <h2>
                ¿Cuál es tu duda?
            </h2>

            <p>
                Si no encontraste la respuesta que buscabas,
                puedes ponerte en contacto con nosotros.
            </p>

        </div>

        <a
            href="registro.php"
            class="faq-contact-button"
        >
            Contactar
        </a>

    </section>


</main>


<?php include __DIR__ . '/includes/footer.php'; ?>

</body>
</html>