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
// Personas de Contactos contabilidad
$nombre_contabilidad = $_POST['nombre_contabilidad'];
$correo_contabilidad = $_POST['correo_contabilidad'];
$telefono_fijo_contabilidad = $_POST['telefono_fijo_contabilidad'];
$ext_contabilidad = $_POST['ext_contabilidad'];
$telefono_movil_contabilidad = $_POST['telefono_movil_contabilidad'];
// Personas de Contactos tesoreria
$nombre_tesoreria = $_POST['nombre_tesoreria'];
$correo_tesoreria = $_POST['correo_tesoreria'];
$telefono_fijo_tesoreria = $_POST['telefono_fijo_tesoreria'];
$ext_tesoreria = $_POST['ext_tesoreria'];
$telefono_movil_tesoreria = $_POST['telefono_movil_tesoreria'];
// Personas de Contactos catera
$nombre_cartera = $_POST['nombre_cartera'];
$correo_cartera = $_POST['correo_cartera'];
$telefono_fijo_cartera = $_POST['telefono_fijo_cartera'];
$ext_cartera = $_POST['ext_cartera'];
$telefono_movil_cartera = $_POST['telefono_movil_cartera'];

$fecha_cierre_facturacion = $_POST['fecha_cierre_facturacion'];




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
                                        nombre_legal, tipo_documento_legal, dv_legal, numero_legal, departamento_legal, ciudad_legal, direccion_legal, correo_principal_legal, telefono_legal, telefono_movil_legal,
                                        nombre_contabilidad, correo_contabilidad, telefono_fijo_contabilidad, ext_contabilidad, telefono_movil_contabilidad,
                                        nombre_tesoreria, correo_tesoreria, telefono_fijo_tesoreria, ext_tesoreria, telefono_movil_tesoreria,
                                        nombre_cartera, correo_cartera, telefono_fijo_cartera, ext_cartera, telefono_movil_cartera,
                                        fecha_cierre_facturacion)
        VALUES ('$fecha', '$nombre', '$tipo_documento', '$dv_datos', '$numero_datos', '$direccion', '$departameto', '$ciudad', '$correo_principal', '$telefono', '$telefono_movil', '$detalle_act_datos',
                '$nombre_legal', '$tipo_documento_legal', '$dv_datos_legal', '$numero_legal', '$departamento_legal', '$ciudad_legal', '$direccion_legal', '$correo_principal_legal', '$telefono_legal', '$telefono_movil_legal',
                '$nombre_contabilidad','$correo_contabilidad','$telefono_fijo_contabilidad','$ext_contabilidad','$telefono_movil_contabilidad',
                '$nombre_tesoreria','$correo_tesoreria','$telefono_fijo_tesoreria','$ext_tesoreria','$telefono_movil_tesoreria',
                '$nombre_cartera','$correo_cartera','$telefono_fijo_cartera','$ext_cartera','$telefono_movil_cartera',
                '$fecha_cierre_facturacion')";

if ($conn->query($sql) === TRUE) {
    echo "Los datos se guardaron correctamente.";
} else {
    echo "Error al guardar los datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
