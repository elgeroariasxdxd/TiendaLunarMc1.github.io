
<?php
require_once __DIR__ . '/config.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$carrito = $_SESSION['carrito'] ?? [];

$total = 0;
$cantidad_total = 0;

foreach ($carrito as $producto) {
    $subtotal = $producto['precio'] * $producto['cantidad'];

    $total += $subtotal;
    $cantidad_total += $producto['cantidad'];
}
?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Carrito - LunarMC</title>

    <link rel="stylesheet" href="index-.css">

</head>

<body class="dark-mode">

<?php include __DIR__ . '/includes/header.php'; ?>


<main class="main-container text-center">

    <section class="cart-section">

        <h2 class="gold-heading">
            🛒 Tu carrito
        </h2>


        <?php if (empty($carrito)): ?>

            <div class="cart-empty">

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Todavía no has agregado ningún producto.
                </p>

                <a href="rangos.php" class="btn-add-cart">
                    Ver rangos
                </a>

            </div>


        <?php else: ?>


            <div class="cart-container">


                <?php foreach ($carrito as $id => $producto): ?>

                    <?php
                    $subtotal = $producto['precio'] * $producto['cantidad'];
                    ?>


                    <div class="cart-item">


                        <div class="cart-item-image">

                            <img
                                src="<?php echo htmlspecialchars($producto['imagen'], ENT_QUOTES, 'UTF-8'); ?>"
                                alt="<?php echo htmlspecialchars($producto['nombre'], ENT_QUOTES, 'UTF-8'); ?>"
                                class="cart-item-img"
                            >

                        </div>


                        <div class="cart-item-info">

                            <h3>
                                <?php echo htmlspecialchars($producto['nombre'], ENT_QUOTES, 'UTF-8'); ?>
                            </h3>

                            <p>
                                Precio:
                                $<?php echo number_format($producto['precio'], 2); ?>
                                USD
                            </p>

                            <p>
                                Cantidad:
                                <?php echo $producto['cantidad']; ?>
                            </p>

                        </div>


                        <div class="cart-item-total">

                            <strong>
                                $<?php echo number_format($subtotal, 2); ?> USD
                            </strong>

                        </div>


                    </div>

                <?php endforeach; ?>


                <div class="cart-summary">

                    <h3>
                        Total:
                        $<?php echo number_format($total, 2); ?> USD
                    </h3>

                    <p>
                        Productos:
                        <?php echo $cantidad_total; ?>
                    </p>


                    <div class="cart-actions">

                        <a
                            href="rangos.php"
                            class="btn-add-cart"
                        >
                            ← Continuar comprando
                        </a>


                        <a
                            href="vaciar carrito.php"
                            class="btn-logout"
                        >
                            Vaciar carrito
                        </a>


                        <a
                            href="procesar pedido.php"
                            class="btn-cart"
                        >
                            💳 Finalizar compra
                        </a>

                    </div>


                </div>


            </div>


        <?php endif; ?>

    </section>

</main>


<?php

if (file_exists(__DIR__ . '/includes/footer.php')) {
    include __DIR__ . '/includes/footer.php';
}

?>

</body>

    </html>
    

