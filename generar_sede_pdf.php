<?php
require_once 'dompdf/autoload.inc.php';

use Dompdf\Dompdf;

// Obtener el nombre del cliente desde la solicitud
$sede = $_POST['sede'];

// Conectar a la base de datos y obtener los datos del cliente
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vinculacion";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

//$sql = "SELECT * FROM tabla_cuestionario WHERE nombre = '$nombre'";
$sql = "SELECT * FROM tabla_cuestionario WHERE nombre = '$nombre'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();

    // Generar el contenido HTML del reporte
    $html = '<html><body>';
    $html .= '<h1>Reporte de Cliente</h1>';
    $html .= '<p><strong>Nombre:</strong> ' . $row['nombre'] . '</p>';
    $html .= '<p><strong>Fecha de Registro:</strong> ' . $row['fecha'] . '</p>';
    $html .= '<p><strong>Tipo de Documento:</strong> ' . $row['tipo_documento'] . '</p>';
    $html .= '<p><strong>Dirección:</strong> ' . $row['direccion'] . '</p>';
    $html .= '<p><strong>Ciudad:</strong> ' . $row['ciudad'] . '</p>';
    $html .= '<p><strong>Correo Principal:</strong> ' . $row['correo_principal'] . '</p>';
    $html .= '<p><strong>Correo de Facturación:</strong> ' . $row['correo_facturacion'] . '</p>';
    $html .= '<p><strong>Teléfono Fijo:</strong> ' . $row['telefono'] . '</p>';
    $html .= '</body></html>';

    // Generar el reporte en PDF utilizando Dompdf
    $dompdf = new Dompdf();
    $dompdf->loadHtml($html);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    $output = $dompdf->output();

    // Enviar el archivo PDF como respuesta
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="reporte.pdf"');
    header('Content-Length: ' . strlen($output));
    echo $output;
} else {
    echo 'No se encontró ningún cliente con ese nombre.';
}

$conn->close();

