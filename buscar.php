<?php
// Obtener el nombre buscado
$nombre_buscar = $_POST['nombre_buscar'];

// Conectar a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vinculacion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Realizar la consulta en la base de datos
$sql = "SELECT * FROM tabla_cuestionario WHERE nombre LIKE '%$nombre_buscar%'";
$resultado = $conn->query($sql);

$datos = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $datos[] = $row;
    }
}

// Devolver los resultados en formato JSON
echo json_encode($datos);

// Cerrar la conexión
$conn->close();
?>
