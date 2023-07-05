<?php
// Obtener los datos del formulario
$fecha = $_POST['fecha'];
$nombre = $_POST['nombre'];
$tipo_documento = $_POST['tipo_documento'];
$dv_datos = $_POST['dv_datos'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$correo_principal = $_POST['correo_principal'];
$correo_facturacion = $_POST['correo_facturacion'];
$telefono = $_POST['telefono'];
$telefono_movil = $_POST['telefono_datos'];
$detalle_act_datos = $_POST['detalle_act_datos'];

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
$sql = "INSERT INTO tabla_cuestionario (fecha, nombre_datos, tipo_documento_datos, dv_datos, direccion_datos, ciudad_datos, correo_principal_datos, correo_facturacion_datos, telefono_datos, telefono_movil_datos, detalle_actividad_eco_datos)
        VALUES ('$fecha', '$nombre', '$tipo_documento', '$dv_datos', '$direccion', '$ciudad', '$correo_principal', '$correo_facturacion', '$telefono', '$telefono_movil', '$detalle_act_datos')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos se guardaron correctamente.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
