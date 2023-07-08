<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integratic</title>
    <!-- Generar una alerta con SweetAlert -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.css">
     <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style3.css">
    
     
     
</head>
<body>
    <h1>Formulario de Viculación del cliente</h1>
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
        <input type="checkbox" id="cc" name="tipo_documento" value="CC" onchange="uncheckOther(this)">
        <label for="cc">CC</label>
    
        <input type="checkbox" id="cd" name="tipo_documento" value="CE" onchange="uncheckOther(this)">
        <label for="cd">CE</label>
    
        <input type="checkbox" id="pasaporte" name="tipo_documento" value="Pasaporte" onchange="uncheckOther(this)">
        <label for="pasaporte">Pasaporte</label>
    
        <input type="checkbox" id="nit" name="tipo_documento" value="Nit" onchange="uncheckOther(this)">
        <label for="nit">NIT</label>
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
    <input type="checkbox" id="cc" name="tipo_documento_legal" value="CC" onchange="uncheckOther_legal(this)">
        <label for="cc">CC</label>
    
        <input type="checkbox" id="cd" name="tipo_documento_legal" value="CE" onchange="uncheckOther_legal(this)">
        <label for="cd">CE</label>
    
        <input type="checkbox" id="pasaporte" name="tipo_documento_legal" value="Pasaporte" onchange="uncheckOther_legal(this)">
        <label for="pasaporte">Pasaporte</label>
    
        <input type="checkbox" id="nit" name="tipo_documento_legal" value="Nit" onchange="uncheckOther_legal(this)">
        <label for="nit">NIT</label>
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

    <h4>Persona de contacto de contabilidad:</h4>
    <label for="nombre_contabilidad">Nombre y Apellido:</label>
    <input type="text" id="nombre_contabilidad" name="nombre_contabilidad" required><br><br>

    <label for="correo_contabilidad">Correo del área de Contabilidad:</label>
    <input type="email" id="correo_contabilidad" name="correo_contabilidad" required><br><br>

    <label for="telefono_fijo_contabilidad">Teléfono Fijo del área de contabilidad:</label>
    <input type="tel" id="telefono_fijo_contabilidad" name="telefono_fijo_contabilidad" required><br><br>

    <label for="ext_contabilidad">Extensión del área de contabilidad:</label>
    <input type="tel" id="ext_contabilidad" name="ext_contabilidad" required><br><br>

    <label for="telefono_movil_contabilidad">Teléfono móvil del área de contabilidad:</label>
    <input type="tel" id="telefono_movil_contabilidad" name="telefono_movil_contabilidad" required><br><br>
    <h4>Persona de contacto de Tesorería:</h4>
    <label for="nombre_tesoreria">Nombre y Apellido:</label>
    <input type="text" id="nombre_tesoreria" name="nombre_tesoreria" required><br><br>

    <label for="correo_tesoreria">Correo del área de Tesorería:</label>
    <input type="email" id="correo_tesoreria" name="correo_tesoreria" required><br><br>

    <label for="telefono_fijo_tesoreria">Teléfono Fijo del área de Tesorería:</label>
    <input type="tel" id="telefono_fijo_tesoreria" name="telefono_fijo_tesoreria" required><br><br>

    <label for="ext_tesoreria">Extensión del área de Tesorería:</label>
    <input type="tel" id="ext_tesoreria" name="ext_tesoreria" required><br><br>

    <label for="telefono_movil_tesoreria">Teléfono móvil del área de Tesorería:</label>
    <input type="tel" id="telefono_movil_tesoreria" name="telefono_movil_tesoreria" required><br><br>
    <h4>Persona de contacto de Cartera:</h4>
    <label for="nombre_cartera">Nombre y Apellido:</label>
    <input type="text" id="nombre_cartera" name="nombre_cartera" required><br><br>

    <label for="correo_cartera">Correo del área de Cartera:</label>
    <input type="email" id="correo_cartera" name="correo_cartera" required><br><br>

    <label for="telefono_fijo_cartera">Teléfono Fijo del área de Cartera:</label>
    <input type="tel" id="telefono_fijo_cartera" name="telefono_fijo_cartera" required><br><br>

    <label for="ext_cartera">Extensión del área de Cartera:</label>
    <input type="tel" id="ext_cartera" name="ext_cartera" required><br><br>

    <label for="telefono_movil_cartera">Teléfono móvil del área de Cartera:</label>
    <input type="tel" id="telefono_movil_cartera" name="telefono_movil_cartera" required><br><br>

    <label for="fecha_cierre_facturacion">Fecha de Cierre de Facturación:</label>
    <input type="date" id="fecha_cierre_facturacion" name="fecha_cierre_facturacion" required><br><br>
    
    
    <!--############################################################### Características Tributarias #############################################################################-->
    
    <label for="Caracteristicas_Tributarias">Características Tributarias</label>
    <div class="checkbox-group">
        <input type="checkbox" id="persona_natural" name="Caracteristicas_Tributarias" value="Persona Natural" onchange="uncheckOther_tributaria(this)">
        <label for="persona_natural">Persona Natural</label>
    
        <input type="checkbox" id="reg_comun" name="Caracteristicas_Tributarias" value="Regimen Común" onchange="uncheckOther_tributaria(this)">
        <label for="reg_comun">Regimen Común</label>
    
        <input type="checkbox" id="gran_contribuyente" name="Caracteristicas_Tributarias" value="Gran Contribuyente" onchange="uncheckOther_tributaria(this)">
        <label for="gran_contribuyente">Gran Contribuyente</label>
    
        <input type="checkbox" id="reg_simplificado" name="Caracteristicas_Tributarias" value="Regimen Simplificado" onchange="uncheckOther_tributaria(this)">
        <label for="reg_simplificado">Regimen Simplificado</label>

         <input type="checkbox" id="autorretenedor" name="Caracteristicas_Tributarias" value="Autorretenedor" onchange="uncheckOther_tributaria(this)">
        <label for="autorretenedor">Autorretenedor</label>
  </div>
  <div class="checkbox-group">
        <input type="checkbox" id="si" name="retiene_ica" value="Si" onchange="uncheckOther_ica(this)">
        <label for="si">Si</label>
    
        <input type="checkbox" id="no" name="retiene_ica" value="No" onchange="uncheckOther_ica(this)">
        <label for="no">NO</label> 
  </div>  
  
        <label for="ica_cod_actividad">ICA Cod Actividad:</label>
        <input type="text" id="ica_cod_actividad" name="ica_cod_actividad" required><br><br>

    <!--######################################  Autorización de tratamiento de los datos personales y de la empresa  #############################################################################-->
    <h2>Autorización de tratamiento de los datos personales y de la empresa</h2>
       

    <!--################################################## Nombre y cargo de la persona cargo la infomación  ###################################################################-->
    <h2>Información del Representante Legal</h2>
    <label for="nom_diligencio">Nombre y Apellido quien diligenció el formulario:</label>
    <input type="text" id="nom_diligencio" name="nom_diligencio" required><br><br>

    <label for="cargo_diligencio">Cargo quien diligenció el formulario:</label>
    <input type="text" id="cargo_diligencio" name="cargo_diligencio" required><br><br> 

    <input type="submit" value="Enviar  Formulario">
  </form>


  <script src="checkbox.js"></script>
  <script src="ciudades.js"></script>
  
</body>
</html>