<?php
require_once __DIR__ . '/../config.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$usuario_logueado = isset($_SESSION['usuario_id']);

$nick_usuario = $usuario_logueado
    ? ($_SESSION['nick'] ?? 'Usuario')
    : '';

$es_inicio = basename($_SERVER['PHP_SELF'] ?? '') === 'index.php';

/*
 * URL de la skin del jugador.
 * Se genera automáticamente usando su nick de Minecraft.
 */
$skin_usuario = '';

if ($usuario_logueado && $nick_usuario !== '') {
    $skin_usuario = 'https://mc-heads.net/body/' .
        rawurlencode($nick_usuario) .
        '/100';
}
?>

<header class="header-top">

    <div class="header-left">

        <button
            id="copy-ip-btn"
            class="clickable-ip"
            type="button"
            onclick="copyIP()"
        >
            IP: lunarmc.cc
        </button>

    </div>


    <div class="header-center">

        <h1 class="header-title">
            <?php
            echo defined('APP_NAME')
                ? APP_NAME
                : 'LunarMC Network';
            ?>
        </h1>

    </div>


    <div class="header-right">

        <?php if ($usuario_logueado): ?>

            <!-- =================================================
                 USUARIO LOGUEADO + SKIN
                 ================================================= -->

            <a
                href="panel.php"
                class="account-user"
            >

                <span class="account-skin-wrapper">

                    <img
                        src="<?php echo htmlspecialchars(
                            $skin_usuario,
                            ENT_QUOTES,
                            'UTF-8'
                        ); ?>"
                        alt="Skin de <?php echo htmlspecialchars(
                            $nick_usuario,
                            ENT_QUOTES,
                            'UTF-8'
                        ); ?>"
                        class="account-skin"
                    >

                </span>


                <span class="account-user-info">

                    <span class="account-user-label">
                        MI CUENTA
                    </span>

                    <span class="account-user-name">
                        <?php echo htmlspecialchars(
                            $nick_usuario,
                            ENT_QUOTES,
                            'UTF-8'
                        ); ?>
                    </span>

                </span>

            </a>


            <a
                href="logout.php"
                class="btn-logout"
            >
                Cerrar sesión
            </a>

        <?php else: ?>

            <a
                href="login.php"
                class="btn-login"
            >
                Iniciar sesión
            </a>

            <a
                href="registro.php"
                class="btn-register-link"
            >
                <span class="btn-register">
                    Regístrate 🔑
                </span>
            </a>

        <?php endif; ?>


        <button
            type="button"
            id="toggle-theme-btn"
        >
            ☀️ Modo Claro
        </button>

    </div>

</header>


<div
    class="datetime-banner"
    id="datetime-banner"
>
    Fecha:
    <?php echo date("d/m/Y"); ?>

    |

    Hora actual:

    <span id="clock">
        <?php echo date("H:i:s"); ?>
    </span>
</div>


<?php if ($es_inicio): ?>

    <!-- =====================================================
         MENÚ COMPACTO DEL INICIO
         ===================================================== -->

    <nav class="home-nav">

        <a
            href="index.php"
            class="home-nav-link active"
        >
            Inicio
        </a>

        <a
            href="rangos.php"
            class="home-nav-link"
        >
            🏆 Rangos
        </a>

        <a
            href="extras.php"
            class="home-nav-link"
        >
            ✦ Extras
        </a>

        <a
            href="Acerca de Nosotros.php"
            class="home-nav-link"
        >
            Acerca de Nosotros
        </a>

        <a
            href="carrito.php"
            class="home-nav-link"
        >
            🛒 Carrito
        </a>

    </nav>


<?php else: ?>


    <!-- =====================================================
         HEADER NORMAL PARA LAS DEMÁS PÁGINAS
         ===================================================== -->

    <section class="header-container text-center">

        <div class="banner-box">

            <img
                src="imagen del servidor lunar.png"
                alt="LunarMC Banner"
                class="banner-img"
            >

        </div>


        <h1 class="brand-title">

            <?php
            echo defined('APP_NAME')
                ? APP_NAME
                : 'LunarMC Network';
            ?>

        </h1>


        <div class="discord-box-wrapper">

            <div id="discord-community">

                <div class="discord-title">
                    Servidor de discord
                </div>

                <a
                    href="<?php
                    echo defined('DISCORD_URL')
                        ? DISCORD_URL
                        : 'https://discord.gg/BdbZcmjm';
                    ?>"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Haz clic aquí para unirte
                </a>

            </div>

        </div>


        <nav class="main-nav">

            <div class="dropdown">

                <button
                    type="button"
                    class="dropdown-btn"
                >
                    Tridentbox

                    <span class="arrow">
                        ▼
                    </span>

                </button>


                <div class="dropdown-menu">

                    <a
                        href="rangos.php"
                        class="dropdown-item"
                    >
                        Rangos
                    </a>

                    <a
                        href="extras.php"
                        class="dropdown-item"
                    >
                        Extras
                    </a>

                </div>

            </div>


            <a
                href="index.php"
                class="nav-link"
            >
                Inicio
            </a>


            <a
                href="Acerca de Nosotros.php"
                class="nav-link"
            >
                Acerca de Nosotros
            </a>

        </nav>

    </section>

<?php endif; ?>