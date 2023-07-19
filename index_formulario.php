<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integratic</title>
    <!-- Generar una alerta con SweetAlert -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style15.css">
</head>
<body>

    <div class="container">
    <div class="box">
    <img src="logo.png" alt="Integratic">
    <h1 class="form-title">Actualización Datos Clientes o Proveedores</h1>
       
    
        <form action="guardar.php" method="post">
            
        <div class="main-user-info" style="justify-content: end;">
        <div class="user-input-box" style="width: 250px;">
            <?php
            $fechaActual = date('d/m/Y');
            ?>
            <label for="fecha" style="width: 145px;">Fecha de Registro:</label>
            <input type="text" id="fecha" name="fecha" value="<?php echo $fechaActual; ?>" readonly style="width: 75px;">
        </div>
        </div>

        <h2 class="form-title">Infornación General</h2>
        <div class="main-user-info">
            <!-- Infornación General<  required  -->
            
            <div class="user-input-box">
            <label for="nombre">Nombre y Apellido / Razón Social:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre y Apellido o Razón Social" onkeydown="moveToNextInput(event, 'tipo_documento')" required>
            </div>

            <div class="user-input-box">
                <label for="tipo_documento">Tipo de Documento:</label>
                <div class="checkbox-group">
                    <label for="cc_datos">CC</label>
                    <input type="checkbox" id="cc_datos" name="tipo_documento" value="CC" onchange="uncheckOther_datos(this)">
                    
                    <label for="cd_datos">CE</label>
                    <input type="checkbox" id="cd_datos" name="tipo_documento" value="CE" onchange="uncheckOther_datos(this)">
                    
                    <label for="pasaporte_datos">Pasaporte</label>
                    <input type="checkbox" id="pasaporte_datos" name="tipo_documento" value="Pasaporte" onchange="uncheckOther_datos(this)">
                    
                    <label for="nit_datos">NIT</label>
                    <input type="checkbox" id="nit_datos" name="tipo_documento" value="Nit" onchange="uncheckOther_datos(this)">
                    
                </div>
            </div>


            <div class="user-input-box" style="width: 180px;">
            <label for="numero_datos">Número:</label>
            <input type="text" id="numero_datos" name="numero_datos" placeholder="Número de cédula" onkeydown="moveToNextInput(event, 'dv_datos')" required>
            </div>

            <div class="user-input-box" style="width: 60px;">
            <label for="dv_datos">DV:</label>
            <select id="dv_datos" name="dv_datos">
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
           
            </select>
            </div>

            <div class="user-input-box" style="width: 770px;">
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" placeholder="Dirección donde fue expedida la documentación" onkeydown="moveToNextInput(event, 'departamento')" required>
            </div>

            <div class="user-input-box">
            <label for="departamento">Departamento:</label>
            <select id="departamento" name="departamento" onchange="cargarCiudades()"  required>
                <option value="">Selecciona un Departamento</option>
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
                <!-- Opciones de departamentos -->              

            </select>
            </div>
            
            <div class="user-input-box">
            <label for="ciudad">Ciudad:</label>
            <select id="ciudad" name="ciudad" required>
                <option value="">Ciudad</option>
                <!-- Opciones de ciudades -->
            </select>
            </div>
            
    
            <div class="user-input-box">
            <label for="correo_principal_datos">Correo Principal:</label>
            <input type="email" id="correo_principal_datos" name="correo_principal_datos" placeholder="Correo electrónico principal" onkeydown="moveToNextInput(event, 'telefono')" required>
            </div>

            <div class="user-input-box">
            <label for="telefono_datos_fijos">Teléfono Fijo:</label>
            <input type="tel" id="telefono_datos_fijos" name="telefono" placeholder="Ejemplo: 6013198300" onkeydown="moveToNextInput(event, 'telefono_datos')" required>
            </div>

            <div class="user-input-box">
            <label for="telefono_datos">Teléfono Móvil:</label>
            <input type="tel" id="telefono_datos" name="telefono_datos" placeholder="Ejemplo: 3153758214" onkeydown="moveToNextInput(event, 'detalle_act_datos')" required>
            </div>

            <div class="user-input-box">
            <label for="detalle_act_datos">Código CIIU (Principal):</label>
            <input type="text" id="detalle_act_datos" name="detalle_act_datos" placeholder="Actividad económica" onkeydown="moveToNextInput(event, 'nombre_legal')" required>
            </div>

        </div>
    
        <!-- Información del Representante Legal -->
        <h2 class="form-title">Información del Representante Legal</h2>
        <div class="main-user-info">

            <div class="user-input-box">
            <label for="nombre_legal">Nombre y Apellido:</label>
            <input type="text" id="nombre_legal" name="nombre_legal" placeholder="Nombre y Apellido" onkeydown="moveToNextInput(event, 'nombre_legal')" required>
            </div>

            <div class="user-input-box">
            <label for="tipo_documento_legal">Tipo de Documento:</label>
            <div class="checkbox-group">
                <input type="checkbox" id="cc_legal" name="tipo_documento_legal" value="CC" onchange="uncheckOther_legal(this)">
                <label for="cc_legal">CC</label>
            
                <input type="checkbox" id="cd_legal" name="tipo_documento_legal" value="CE" onchange="uncheckOther_legal(this)">
                <label for="cd_legal">CE</label>
            
                <input type="checkbox" id="pasaporte_legal" name="tipo_documento_legal" value="Pasaporte" onchange="uncheckOther_legal(this)">
                <label for="pasaporte_legal">Pasaporte</label>
            
                <input type="checkbox" id="nit_legal" name="tipo_documento_legal" value="Nit" onchange="uncheckOther_legal(this)">
                <label for="nit_legal">NIT</label>
            </div>
        </div>


        <div class="user-input-box" style="width: 180px;">
            <label for="numero_legal">Número:</label>
            <input type="text" id="numero_legal" name="numero_legal"placeholder="Número de cédula"  onkeydown="moveToNextInput(event, 'dv_datos_legal')" required>
            </div>

            <div class="user-input-box" style="width: 60px;">
            <label for="dv_datos_legal">DV:</label>
            <select id="dv_datos_legal" name="dv_datos_legal" >
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
           
            </select>
            </div>
    

            <div class="user-input-box">
            <label for="correo_principal_legal">Correo Principal:</label>
            <input type="email" id="correo_principal_legal" name="correo_principal_legal" placeholder="Correo electrónico principal" onkeydown="moveToNextInput(event, 'departamento_legal')" required>
            </div>


            <div class="user-input-box">
            <label for="departamento_legal">Departamento:</label>
            <select id="departamento_legal" name="departamento_legal" onchange="cargarCiudades1()" onkeydown="moveToNextInput(event, 'ciudad_legal')" required>
                <option value="">Selecciona un Departamento</option>
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
                <!-- Opciones de departamentos -->
            </select>
            </div>
            
            <div class="user-input-box">
            <label for="ciudad_legal">Ciudad:</label>
            <select id="ciudad_legal" name="ciudad_legal" required>
            <option value="">Ciudad</option>   
                <!-- Opciones de ciudades -->
            </select>
            </div>


    
            <div class="user-input-box" style="width: 770px;">
            <label for="direccion_legal">Dirección:</label>
            <input type="text" id="direccion_legal" name="direccion_legal" placeholder="Dirección (Ejemplo Cr 26 # 2 58 Cali, Colombia)" onkeydown="moveToNextInput(event, 'telefono_legal')" required>
            </div>
    

   
            <div class="user-input-box">
            <label for="telefono_legal">Teléfono Fijo:</label>
            <input type="tel" id="telefono_legal" name="telefono_legal" placeholder="Ejemplo: 6013198300" onkeydown="moveToNextInput(event, 'telefono_movil_legal')" required>
            </div>
    
            <div class="user-input-box">
            <label for="telefono_movil_legal">Teléfono Móvil:</label>
            <input type="tel" id="telefono_movil_legal" name="telefono_movil_legal" placeholder="Ejemplo: 3153758214" onkeydown="moveToNextInput(event, 'nombre_contabilidad')" required>
            </div>
       
        </div>
    
        <!-- Personas de Contacto -->
        <h2 class="form-title">Personas de Contacto Contabilidad</h2>
        <div class="main-user-info">

            <div class="user-input-box">
            <label for="nombre_contabilidad">Nombre y Apellido:</label>
            <input type="text" id="nombre_contabilidad" name="nombre_contabilidad" placeholder="Nombre y Apellido" onkeydown="moveToNextInput(event, 'correo_contabilidad')">
            </div>
            
            <div class="user-input-box">
            <label for="correo_contabilidad">Correo principal:</label>
            <input type="email" id="correo_contabilidad" name="correo_contabilidad" placeholder="Correo electrónico principal" onkeydown="moveToNextInput(event, 'ext_contabilidad')">
            </div>
            
            <div class="user-input-box">
            <label for="ext_contabilidad">Extensión:</label>
            <input type="tel" id="ext_contabilidad" name="ext_contabilidad" placeholder="Extensión ejemplo: 1234" onkeydown="moveToNextInput(event, 'telefono_fijo_contabilidad')">
            </div>  

            <div class="user-input-box">
            <label for="telefono_fijo_contabilidad">Teléfono Fijo:</label>
            <input type="tel" id="telefono_fijo_contabilidad" name="telefono_fijo_contabilidad" placeholder="Ejemplo: 6013198300" onkeydown="moveToNextInput(event, 'telefono_movil_contabilidad')">
            </div>
                                 
            <div class="user-input-box">
            <label for="telefono_movil_contabilidad">Teléfono Móvil:</label>
            <input type="tel" id="telefono_movil_contabilidad" name="telefono_movil_contabilidad" placeholder="Ejemplo: 3153758214" onkeydown="moveToNextInput(event, 'nombre_tesoreria')">
            </div>
            </div>

            <h2 class="form-title">Persona de Contacto Tesorería</h2>
            <div class="main-user-info">
            <div class="user-input-box">
            <label for="nombre_tesoreria">Nombre y Apellido:</label>
            <input type="text" id="nombre_tesoreria" name="nombre_tesoreria" placeholder="Nombre y Apellido" onkeydown="moveToNextInput(event, 'correo_tesoreria')">
            </div>
            

            <div class="user-input-box">
            <label for="correo_tesoreria">Correo principal:</label>
            <input type="email" id="correo_tesoreria" name="correo_tesoreria" placeholder="Correo electrónico principal" onkeydown="moveToNextInput(event, 'ext_tesoreria')">
            </div>
            
            <div class="user-input-box">
            <label for="ext_tesoreria">Extensión:</label>
            <input type="tel" id="ext_tesoreria" name="ext_tesoreria" placeholder="Extensión ejemplo: 1234" onkeydown="moveToNextInput(event, 'telefono_fijo_tesoreria')">
            </div> 

            <div class="user-input-box">
            <label for="telefono_fijo_tesoreria">Teléfono Fijo:</label>
            <input type="tel" id="telefono_fijo_tesoreria" name="telefono_fijo_tesoreria" placeholder="Ejemplo: 6013198300" onkeydown="moveToNextInput(event, 'telefono_movil_tesoreria')">
            </div>
            
            
            
            <div class="user-input-box">
            <label for="telefono_movil_tesoreria">Teléfono Móvil:</label>
            <input type="tel" id="telefono_movil_tesoreria" name="telefono_movil_tesoreria" placeholder="Ejemplo: 3153758214" onkeydown="moveToNextInput(event, 'nombre_cartera')">
            </div>
            </div>


            <h2 class="form-title">Persona de Contacto Cartera:</h2>
            <div class="main-user-info">
           
            
            <div class="user-input-box"> 
            <label for="nombre_cartera">Nombre y Apellido:</label>
            <input type="text" id="nombre_cartera" name="nombre_cartera" placeholder="Nombre y Apellido" onkeydown="moveToNextInput(event, 'correo_cartera')">
            </div>
            
            <div class="user-input-box">
            <label for="correo_cartera">Correo principal:</label>
            <input type="email" id="correo_cartera" name="correo_cartera" placeholder="Correo electrónico principal" onkeydown="moveToNextInput(event, 'ext_cartera')">
            </div>

            <div class="user-input-box">
            <label for="ext_cartera">Extensión:</label>
            <input type="tel" id="ext_cartera" name="ext_cartera"  placeholder="Extensión ejemplo: 1234" onkeydown="moveToNextInput(event, 'telefono_fijo_cartera')">
            </div>

            <div class="user-input-box">
            <label for="telefono_fijo_cartera">Teléfono Fijo:</label>
            <input type="tel" id="telefono_fijo_cartera" name="telefono_fijo_cartera"  placeholder="Ejemplo: 6013198300" onkeydown="moveToNextInput(event, 'telefono_movil_cartera')">
            </div>
            
            
            
            <div class="user-input-box">
            <label for="telefono_movil_cartera">Teléfono Móvil:</label>
            <input type="tel" id="telefono_movil_cartera" name="telefono_movil_cartera" placeholder="Ejemplo: 3153758214" onkeydown="moveToNextInput(event, 'fecha_cierre_facturacion')">
            </div>
            
            <div class="user-input-box">
            <label for="fecha_cierre_facturacion">Fecha de Cierre de Facturación:</label>
            <input type="date" id="fecha_cierre_facturacion" name="fecha_cierre_facturacion" required>
            </div>
          
        </div>
    
        <h2 class="form-title">Características Tributarias</h2>

    <div class="main-user-info">
        <div class="gender-details-box">
            <label for="Caracteristicas_Tributarias">Características Tributarias</label>
            <div class="gender-category">
                <label for="persona_natural"  >Persona Natural</label>
                <input type="checkbox" id="persona_natural" name="Caracteristicas_Tributarias" value="Persona Natural" onchange="uncheckOther_tributaria(this)">
                
                <label for="reg_comun"  >Regimen Común</label>
                <input type="checkbox" id="reg_comun" name="Caracteristicas_Tributarias" value="Regimen Común" onchange="uncheckOther_tributaria(this)">
             
                <label for="gran_contribuyente"  >Gran Contribuyente</label>
                <input type="checkbox" id="gran_contribuyente" name="Caracteristicas_Tributarias" value="Gran Contribuyente" onchange="uncheckOther_tributaria(this)">
               
                <label for="reg_simplificado"  >Regimen Simplificado</label>
                <input type="checkbox" id="reg_simplificado" name="Caracteristicas_Tributarias" value="Regimen Simplificado" onchange="uncheckOther_tributaria(this)">
                
                <label for="autorretenedor"  >Autorretenedor</label>
                <input type="checkbox" id="autorretenedor" name="Caracteristicas_Tributarias" value="Autorretenedor" onchange="uncheckOther_tributaria(this)">

                <label for="otros">Otros</label>
                <input type="checkbox" id="otros" name="Caracteristicas_Tributarias" value="Otros" onchange="uncheckOther_tributaria(this)">
            </div> 
        </div>
    </div>

    <br>

    
    <div class="main-user-info">
        <div class="gender-details-box" style="width: 200px;">
       
          <label>Retiene ICA</label>
            <div class="gender-category">
                <!--<label for="si">Si</label>
                <input type="checkbox" id="si" name="retiene_ica" value="Si" onchange="uncheckOther_ica(this)">                      
                <label for="no">NO</label>
                <input type="checkbox" id="no" name="retiene_ica" value="No" onchange="uncheckOther_ica(this)">  -->
                <label for="si">Si</label>
                <input type="checkbox" id="si" name="retiene_ica" value="Si" onchange="uncheckOther_ica(this)">
                <label for="no">NO</label>
                <input type="checkbox" id="no" name="retiene_ica" value="No" onchange="uncheckOther_ica(this)">
            </div>
      
        </div>

        <div class="user-input-box">
            <label for="ica_cod_actividad">ICA Cod Actividad:</label>
            <input type="text" id="ica_cod_actividad" name="ica_cod_actividad" placeholder="ICA código de Actividad">
        </div>

        </div>

        <!-- Autorización de tratamiento de los datos personales y de la empresa -->
        <h2 class="form-title">Autorización de tratamiento de datos empresa y/o de personales</h2>
        <div class="main-user-info">
           
            <!-- Contenido de la autorización -->
            <p>1. Autorizo a INTEGRA TIC TECNOLOGIAS DE OPTIMIZACION S.A.S. (en adelante la "EMPRESA"), domiciliada en la CRA 26 # 2-58 de Cali, CEL. 3136838736, con NIT 901,145,160-1, para que realice el tratamiento de los datos personales aquí suministrados y de los que posteriormente se suministren, de los cuales sea titular quien suscribe en nombre propio y/o que correspondan a los empleados, colaboradores, dependientes, aliados, accionistas, agentes o en general a cualquier persona vinculada al proveedor o cliente. El tratamiento de los datos se hará para una o más de las siguientes finalidades:</p>

<ol>
  <li>Cumplir con las solicitudes de productos y/o de servicios realizados por la EMPRESA al cliente;</li>
  <li>Cumplir con las solicitudes de productos y/o de servicios realizados por el proveedor a la EMPRESA;</li>
  <li>Realizar gestión, verificación y manejo de información financiera, contable, fiscal, administrativa y de facturación;</li>
  <li>Realizar pagos electrónicos derivados de la relación que vincula a las partes;</li>
  <li>Realizar pagos por diferentes medios en virtud de la relación comercial que vincula a las partes;</li>
  <li>Realizar gestión y manejo de las relaciones comerciales establecidas o por establecer con prospectos clientes o proveedores, clientes, proveedores, contratistas, accionistas, aliados y de las personas vinculadas a los anteriores;</li>
  <li>Suministrar información y material relacionado con el portafolio de productos y/o servicios de la EMPRESA, así como de noticias y nuevos lanzamientos por cualquier canal de comunicación;</li>
  <li>Realizar gestión comercial, de mercadeo y publicidad de los productos y/o servicios ofrecidos por la EMPRESA;</li>
  <li>Realizar gestión para la atención de PQR, campañas de actualización de datos y cambios, encuestas de opinión y ventas a distancia;</li>
  <li>Realizar la captura de datos biométricos (datos sensibles) a través de registros fotográficos o de video para fines administrativos, comerciales y de publicidad; y</li>
  <li>Transmitir y/o transferir los datos personales a terceras personas según se requiera para la adecuada gestión de las actividades y responsabilidades de la EMPRESA. 
    Respecto de los datos personales que correspondan a titulares distintos de quien suscribe, éste manifiesta contar con la autorización para suministrar los datos a la EMPRESA y otorgar esta autorización. 
    La EMPRESA informa que los titulares de los datos personales que tienen derecho a conocer, actualizar y rectificar sus datos personales, ser informado sobre el uso que se les ha dado, solicitar prueba de la autorización otorgada, presentar quejas ante la SIC por infracción a la ley, revocar la autorización y/o solicitar la supresión de sus datos, acceder en forma gratuita a los mismos y abstenerse de suministrar datos sensibles o datos de niñas, niños y adolescentes. 
    Todo lo anterior de conformidad con la política de tratamiento de datos personales adoptada por la EMPRESA la cual se encuentra publica en la página <a href="http://www.integratic.com.co">www.integratic.com.co</a>, o ser solicitada al correo electrónico <a href="mailto:administracion@integratic.com.co">administracion@integratic.com.co</a></li>
</ol>

<br>

<p>GESTiÓN ADMINISTRATIVA Declaro que cuento con una política y procedimientos para gestionar la seguridad de la información, además acepto las siguiente cláusulas:</p>
<br>

<ol>
  <li>Derechos a auditoría: concedo a la organización contratante, el derecho a evaluar y auditar los controles de seguridad implementados por el proveedor, en forma periódica o cuando se presenten cambios significativos en los controles o en la relación contractual entre ambas partes.</li>
  <li>Notificaciones sobre infracciones en la seguridad: el proveedor informará a la organización contratante sobre cualquier violación a la seguridad de la información que afecte sus operaciones o sus negocios.</li>
  <li>Aceptación de las prácticas de seguridad: el proveedor declara que conoce y acepta sin restricciones las prácticas de seguridad de la información propuestas por el contratante, y que comunicará en forma oportuna, su imposibilidad de adherirse a alguna, algunas o todas ellas en un momento determinado.</li>
</ol>

        </div>
    
        <div class="main-user-info">
            
            <div class="user-input-box">
            <label for="nom_diligencio">Nombre y Apellido quien diligenció el formulario:</label>
            <input type="text" id="nom_diligencio" name="nom_diligencio" onkeydown="moveToNextInput(event, 'cargo_diligencio')" required>
            </div>

            <div class="user-input-box">
            <label for="cargo_diligencio">Cargo quien diligenció el formulario:</label>
            <input type="text" id="cargo_diligencio" name="cargo_diligencio" required>
            </div>       
        </div>
    
        <div class="form-submit-btn">
        
        <input type="submit" value="Enviar Formulario" onclick="validateDatos(); validateLegal(); validateTributaria(); validateIca()">
        </div>

    </form>
    
    
   </div>
</div>

</div>

<footer>
  <span> Created By <a href="https://www.integratic.com.co">Integratic</a> | <span class="far fa-copyright"></span> 2023 All rights reserved.</span>
</footer>

<script>
// Esta función mueve el foco al siguiente campo de entrada cuando se presiona la tecla Enter
function moveToNextInput(event, nextInputId) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById(nextInputId).focus();
  }
}

//Ckeckbox # 1 
function uncheckOther_datos(checkbox) {
    var checkboxes = document.getElementsByName("tipo_documento");
    checkboxes.forEach(function (cb) {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  }

  function validateDatos() {
    var checkboxes = document.getElementsByName("tipo_documento");
    var checkedCount = 0;
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedCount++;
        checkboxes[i].setCustomValidity("");
      } else {
        checkboxes[i].setCustomValidity("Seleccione una opción");
      }
    }
  
    if (checkedCount > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].setCustomValidity("");
      }
    }
  }

    //Ckeckbox # 2 
    function uncheckOther_legal(checkbox) {
        var checkboxes = document.getElementsByName("tipo_documento_legal");
        checkboxes.forEach(function (cb) {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      }
    
      function validateLegal() {
        var checkboxes = document.getElementsByName("tipo_documento_legal");
        var checkedCount = 0;
      
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkedCount++;
            checkboxes[i].setCustomValidity("");
          } else {
            checkboxes[i].setCustomValidity("Seleccione una opción");
          }
        }
      
        if (checkedCount > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].setCustomValidity("");
          }
        }
      }


       //Ckeckbox # 3
    function uncheckOther_tributaria(checkbox) {
        var checkboxes = document.getElementsByName("Caracteristicas_Tributarias");
        checkboxes.forEach(function (cb) {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      }
    
      function validateTributaria() {
        var checkboxes = document.getElementsByName("Caracteristicas_Tributarias");
        var checkedCount = 0;
      
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkedCount++;
            checkboxes[i].setCustomValidity("");
          } else {
            checkboxes[i].setCustomValidity("Seleccione una opción");
          }
        }
      
        if (checkedCount > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].setCustomValidity("");
          }
        }
      }


       //Ckeckbox # 4 
    function uncheckOther_ica(checkbox) {
        var checkboxes = document.getElementsByName("retiene_ica");
        checkboxes.forEach(function (cb) {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      }
    
      function validateIca() {
        var checkboxes = document.getElementsByName("retiene_ica");
        var checkedCount = 0;
      
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkedCount++;
            checkboxes[i].setCustomValidity("");
          } else {
            checkboxes[i].setCustomValidity("Seleccione una opción");
          }
        }
      
        if (checkedCount > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].setCustomValidity("");
          }
        }
      }

 

</script>


<!--<script src="checkbox.js"></script>-->
    <script src="ciudades_colombia.js"></script>
</body>

</html>
