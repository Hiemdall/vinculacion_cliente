<?php
// Obtener los datos del formulario
// Datos del Asociado de Negocio
$fecha = $_POST['fecha'];
$nombre = $_POST['nombre'];
$tipo_documento = $_POST['tipo_documento'];
$dv_datos = $_POST['dv_datos'];
$numero_datos = $_POST['numero_datos'];
$direccion = $_POST['direccion'];
$departameto = $_POST['departamento'];
$ciudad = $_POST['ciudad'];
$correo_principal = $_POST['correo_principal'];
$telefono = $_POST['telefono'];
$telefono_movil = $_POST['telefono_datos'];
$detalle_act_datos = $_POST['detalle_act_datos'];
// Información del Representante Legal
$nombre_legal = $_POST['nombre_legal'];
$tipo_documento_legal = $_POST['tipo_documento_legal'];
$dv_datos_legal = $_POST['dv_datos_legal'];
$numero_legal = $_POST['numero_legal'];
$departamento_legal = $_POST['departamento_legal'];
$ciudad_legal = $_POST['ciudad_legal'];
$direccion_legal = $_POST['direccion_legal'];
$correo_principal_legal = $_POST['correo_principal_legal'];
$telefono_legal = $_POST['telefono_legal'];
$telefono_movil_legal = $_POST['telefono_movil_legal'];



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
$sql = "INSERT INTO tabla_cuestionario (fecha, nombre_datos, tipo_documento_datos, dv_datos, numero_datos, direccion_datos, departamento_datos, ciudad_datos, correo_principal_datos, telefono_datos, telefono_movil_datos, detalle_actividad_eco_datos,
                                        nombre_legal, tipo_documento_legal, dv_legal, numero_legal, departamento_legal, ciudad_legal, direccion_legal, correo_principal_legal, telefono_legal, telefono_movil_legal)
        VALUES ('$fecha', '$nombre', '$tipo_documento', '$dv_datos', '$numero_datos', '$direccion', '$departameto', '$ciudad', '$correo_principal', '$telefono', '$telefono_movil', '$detalle_act_datos',
                '$nombre_legal',  '$tipo_documento_legal', '$dv_datos_legal', '$numero_legal', '$departamento_legal', '$ciudad_legal', '$direccion_legal', '$correo_principal_legal', '$telefono_legal', '$telefono_movil_legal')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos se guardaron correctamente.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
