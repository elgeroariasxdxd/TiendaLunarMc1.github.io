
<?php

session_start();


/*
|--------------------------------------------------------------------------
| CREAR CARRITO SI NO EXISTE
|--------------------------------------------------------------------------
*/

if (!isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = [];
}


/*
|--------------------------------------------------------------------------
| PRODUCTOS DISPONIBLES
|--------------------------------------------------------------------------
*/

$productos = [

    /*
    |--------------------------------------------------------------------------
    | RANGOS
    |--------------------------------------------------------------------------
    */

    'sun' => [
        'nombre' => 'Sun',
        'precio' => 2.99,
        'imagen' => 'sun rango.png'
    ],

    'venus' => [
        'nombre' => 'Venus',
        'precio' => 5.99,
        'imagen' => 'rango venus.png'
    ],

    'venus_plus' => [
        'nombre' => 'Venus +',
        'precio' => 9.99,
        'imagen' => 'rango venus +.png'
    ],

    'nova' => [
        'nombre' => 'Nova',
        'precio' => 14.99,
        'imagen' => 'rango nova.png'
    ],

    'lunar' => [
        'nombre' => 'Lunar',
        'precio' => 16.99,
        'imagen' => 'rango lunar.png'
    ],

    'summer' => [
        'nombre' => 'Summer',
        'precio' => 20.99,
        'imagen' => 'rango summer.png'
    ],


    /*
    |--------------------------------------------------------------------------
    | EXTRAS
    |--------------------------------------------------------------------------
    */

    'tags' => [
        'nombre' => 'Tags',
        'precio' => 2.99,
        'imagen' => 'imagen de tags.png'
    ],

    'kill_effects' => [
        'nombre' => 'Kill Effects',
        'precio' => 4.99,
        'imagen' => 'imagen de kill efects.png'
    ],

    'llave_todo_o_nada' => [
        'nombre' => 'Llave Todo o Nada',
        'precio' => 1.99,
        'imagen' => 'llave todo o nada.png'
    ]

];


/*
|--------------------------------------------------------------------------
| OBTENER PRODUCTO
|--------------------------------------------------------------------------
*/

$producto_id = $_GET['producto'] ?? '';


/*
|--------------------------------------------------------------------------
| COMPROBAR QUE EL PRODUCTO EXISTA
|--------------------------------------------------------------------------
*/

if (!isset($productos[$producto_id])) {

    header('Location: rangos.php');

    exit;
}


/*
|--------------------------------------------------------------------------
| AGREGAR AL CARRITO
|--------------------------------------------------------------------------
*/

if (isset($_SESSION['carrito'][$producto_id])) {

    $_SESSION['carrito'][$producto_id]['cantidad']++;

} else {

    $_SESSION['carrito'][$producto_id] = [

        'nombre' => $productos[$producto_id]['nombre'],

        'precio' => $productos[$producto_id]['precio'],

        'imagen' => $productos[$producto_id]['imagen'],

        'cantidad' => 1

    ];
}


/*
|--------------------------------------------------------------------------
| IR AL CARRITO
|--------------------------------------------------------------------------
*/

header('Location: carrito.php');

exit;

?>

