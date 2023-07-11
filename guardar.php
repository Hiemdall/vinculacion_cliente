<?php
// Obtener los datos del formulario
$fecha = $_POST['fecha'];
$nombre = $_POST['nombre'];
$tipo_documento = $_POST['tipo_documento'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$correo_principal = $_POST['correo_principal'];
$correo_facturacion = $_POST['correo_facturacion'];
$telefono = $_POST['telefono'];

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

// Insertar los datos en la tabla
$sql = "INSERT INTO tabla_cuestionario (fecha, nombre, tipo_documento, direccion, ciudad, correo_principal, correo_facturacion, telefono)
        VALUES ('$fecha', '$nombre', '$tipo_documento', '$direccion', '$ciudad', '$correo_principal', '$correo_facturacion', '$telefono')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos se guardaron correctamente.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
