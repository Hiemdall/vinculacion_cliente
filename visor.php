<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ver Archivos</title>
<link rel="stylesheet" href="estilo1.css">


</head>
<body>

<img src="logo.png" alt="">

  <h1>Archivos Almacenados</h1>
  
  <table border="1">
    <tr>
      <th>#</th>
      <th>Fecha</th>
      <th>Razón Social</th>
      <th>Nombre</th>
      <th>Cargo</th>
      <th>Ruta Clik</th>
    </tr>
    
    <?php

include("conexion.php");

$sql = "SELECT * FROM tabla_cuestionario";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $filaIndex = 1; // Inicializar el índice para las filas
    

    while ($row = $result->fetch_assoc()) {
        echo "<tr>"; 
        echo "<td>$filaIndex</td>"; // Número automático
        echo "<td>" . $row["fecha"] . "</td>";
        echo "<td>" . $row["nombre_datos"] . "</td>";
        echo "<td>" . $row["nom_diligencio"] . "</td>";
        echo "<td>" . $row["cargo_diligencio"] . "</td>";
        echo "<td><a href='" . $row["ruta_archivo"] . "' target='_blank'>" . $row["ruta_archivo"] . "</a></td>";
        //echo "<td><a href='" . $row["ruta_archivo"] . "' target='_blank'>Ver PDF</a></td>";
        echo "</tr>";
        
        $filaIndex++; // Incrementar el índice
       
    }
} else {
    echo "<tr><td colspan='3'>No hay archivos almacenados.</td></tr>";
}

$conn->close();
    ?>
  </table>



  <script>
    // Aplicar estilos a las filas pares (opcional)
    var filas = document.querySelectorAll("table tr:not(:first-child)");
    filas.forEach(function (fila, index) {
        if (index % 2 === 0) {
            fila.style.backgroundColor = "#f2f2f2";
        }
    });
  </script>

<div class="form-submit-btn">
    <a href="index_formulario.php">Regresar</a>
  </div>

</body>
</html>
