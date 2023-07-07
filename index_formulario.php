<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="style3.css">
</head>
<body>
    <h1>Formulario de Cuestionario</h1>
    <form action="guardar.php" method="post">
      <?php
      $fechaActual = date('d/m/y');
      ?>
    <label for="fecha">Fecha de Registro:</label>        
    <input type="text" id="fecha" name="fecha" value="<?php echo $fechaActual; ?>" readonly >

    <!--########################################################### Datos del Asociado de Negocio ##########################################################################-->
    <h2>Datos del Asociado de Negocio</h2>  
    <label for="nombre">Nombre y Apellido / Razón Social:</label>
    <input type="text" id="nombre" name="nombre" required><br><br>

    <label for="tipo_documento">Tipo de Documento:</label>
    <div class="checkbox-group">
    <input type="checkbox" id="cc" name="tipo_documento" value="CC" onchange="disableOtherCheckboxes('CC')">
    <label for="cc">CC</label>
    <input type="checkbox" id="cd" name="tipo_documento" value="CE" onchange="disableOtherCheckboxes('CC')">
    <label for="cd">CE</label>
    <input type="checkbox" id="pasaporte" name="tipo_documento" value="Pasaporte" onchange="disableOtherCheckboxes('CC')">
    <label for="pasaporte">Pasaporte</label>
    <input type="checkbox" id="nit" name="tipo_documento" value="Nit" onchange="disableOtherCheckboxes('CC')">
    <label for="nit">Nit</label><br><br>
  </div>

    <label for="dv_datos">DV :</label>
    <input type="text" id="dv_datos" name="dv_datos" required><br><br>

    <label for="numero_datos">Número:</label>
    <input type="text" id="numero_datos" name="numero_datos" required><br><br>

    <label for="direccion">Dirección:</label>
    <input type="text" id="direccion" name="direccion" required><br><br>

    <label for="departamento">Departamento :</label>
    <select id="departamento" name="departamento" onchange="cargarCiudades()" onkeydown="moveToNextInput(event, 'ciudad')">
    <option value="">Selecciona un departamento</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atlántico">Atlántico</option>
        <option value="Bolívar">Bolívar</option>
        <option value="Boyacá">Boyacá</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquetá">Caquetá</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Chocó">Chocó</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guainía">Guainía</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nariño">Nariño</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quindío">Quindío</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andrés y Providencia">San Andrés y Providencia</option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaupés">Vaupés</option>
        <option value="Vichada">Vichada</option>
    </select>
    
    <label for="ciudad">Ciudad:</label>
    <select id="ciudad" name="ciudad">
    <option value="">Selecciona un departamento primero</option>
    </select>

    <label for="correo_principal">Correo Principal:</label>
    <input type="email" id="correo_principal" name="correo_principal" required><br><br>

    <label for="telefono">Teléfono Fijo:</label>
    <input type="tel" id="telefono" name="telefono" required><br><br>

    <label for="telefono_datos">Teléfono Móvil:</label>
    <input type="tel" id="telefono_datos" name="telefono_datos" required><br><br>

    <label for="detalle_act_datos">Detalle Activida Economica:</label>
    <input type="text" id="detalle_act_datos" name="detalle_act_datos" required><br><br>
    <!--########################################################### Información del Representante Legal ##########################################################################-->
    <h2>Información del Representante Legal</h2>

    <label for="nombre_legal">Nombre y Apellido:</label>
    <input type="text" id="nombre_legal" name="nombre_legal" required><br><br>

    <label for="tipo_documento_legal">Tipo de Documento:</label>
    <div class="checkbox-group">
    <input type="checkbox" id="cc" name="tipo_documento_legal" value="CC">
    <label for="cc">CC</label>
    <input type="checkbox" id="cd" name="tipo_documento_legal" value="CE">
    <label for="cd">CE</label>
    <input type="checkbox" id="pasaporte" name="tipo_documento_legal" value="Pasaporte">
    <label for="pasaporte">Pasaporte</label>
    <input type="checkbox" id="nit" name="tipo_documento_legal" value="Nit">
    <label for="nit">Nit</label><br><br>
  </div>

    <label for="dv_datos_legal">DV :</label>
    <input type="text" id="dv_datos_legal" name="dv_datos_legal" required><br><br>

    <label for="numero_legal">Número:</label>
    <input type="text" id="numero_legal" name="numero_legal" required><br><br>

    <label for="departamento_legal">Departamento :</label>
    <select id="departamento_legal" name="departamento_legal" onchange="cargarCiudades1()" onkeydown="moveToNextInput(event, 'ciudad_legal')">
    <option value="">Selecciona un departamento</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atlántico">Atlántico</option>
        <option value="Bolívar">Bolívar</option>
        <option value="Boyacá">Boyacá</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquetá">Caquetá</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Chocó">Chocó</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guainía">Guainía</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nariño">Nariño</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quindío">Quindío</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andrés y Providencia">San Andrés y Providencia</option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaupés">Vaupés</option>
        <option value="Vichada">Vichada</option>
    </select>
    
    <label for="ciudad_legal">Ciudad:</label>
    <select id="ciudad_legal" name="ciudad_legal">
    <option value="">Selecciona un departamento primero</option>
    </select>

    <label for="direccion_legal">Dirección:</label>
    <input type="text" id="direccion_legal" name="direccion_legal" required><br><br>

    
    <label for="correo_principal_legal">Correo Principal:</label>
    <input type="email" id="correo_principal_legal" name="correo_principal_legal" required><br><br>

    
    <label for="telefono_legal">Teléfono Fijo:</label>
    <input type="tel" id="telefono_legal" name="telefono_legal" required><br><br>

    <label for="telefono_movil_legal">Teléfono Móvil:</label>
    <input type="tel" id="telefono_movil_legal" name="telefono_movil_legal" required><br><br>

    <!--#################################################################### Personas de Contactos ##############################################################################-->
    <h2>Personas de Contactos</h2>

    <!--############################################################### Características Tributarias #############################################################################-->
    <h2>Características Tributarias</h2>

    <!--################################################## Nombre y cargo de la persona cargo la infomación  ###################################################################-->
    <h2>Información del Representante Legal</h2>

    <input type="submit" value="Guardar">
  </form>

  <script>
function disableOtherCheckboxes(checkboxId) {
  const checkboxes = document.querySelectorAll('input[name="tipo_documento_legal"]');
  
  checkboxes.forEach(function(checkbox) {
    if (checkbox.id !== checkboxId) {
      checkbox.disabled = document.getElementById(checkboxId).checked;
    }
  });
}
</script>
  <script src="ciudades.js"></script>
  
</body>
</html>