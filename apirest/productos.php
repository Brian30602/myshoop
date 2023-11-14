<?php
// Encabezados de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$dbHost = 'localhost';
$dbName = 'productos';
$dbUser = 'root';
$dbPass = '';

// Creamos la conexión a la base de datos
try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
} catch (PDOException $e) {
    die("No se pudo conectar a la base de datos: " . $e->getMessage());
}

// Comprobamos si se ha proporcionado un id en la URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // Ejecutamos la función getById
    getById($id);
} elseif (isset($_GET['query'])) {
    // Ejecutamos la función like
    $query = $_GET['query'];
    like($query);
} else {
    // Ejecutamos la función getAll
    getAll();
}

function getAll() {
    global $pdo;
    $stmt = $pdo->query('SELECT * FROM products');
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products, JSON_PRETTY_PRINT);
}

function getById($id) {
    global $pdo;
    $stmt = $pdo->prepare('SELECT * FROM products WHERE id = ?');
    $stmt->execute([$id]);
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($product, JSON_PRETTY_PRINT);
}

function like($query) {
    global $pdo;
    $query = '%' . $query . '%'; // Preparamos el título para la búsqueda con LIKE
    $stmt = $pdo->prepare('SELECT * FROM products WHERE title LIKE ?');
    $stmt->execute([$query]);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products, JSON_PRETTY_PRINT);
}
?>