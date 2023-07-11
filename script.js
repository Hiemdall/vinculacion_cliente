document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var nombre = document.getElementById('nombre_buscar').value;
  
    // Realizar la solicitud AJAX para buscar el nombre en el servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'buscar.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var resultado = JSON.parse(xhr.responseText);
  
        // Construir la tabla con los resultados
        var tablaHTML = '<table>' +
                        '<tr><th>Fecha de Registro</th><th>Nombre</th><th>Tipo de Documento</th><th>Dirección</th><th>Ciudad</th><th>Correo Principal</th><th>Correo de Facturación</th><th>Teléfono Fijo</th></tr>';
  
        for (var i = 0; i < resultado.length; i++) {
          tablaHTML += '<tr>' +
                       '<td>' + resultado[i].fecha + '</td>' +
                       '<td>' + resultado[i].nombre + '</td>' +
                       '<td>' + resultado[i].tipo_documento + '</td>' +
                       '<td>' + resultado[i].direccion + '</td>' +
                       '<td>' + resultado[i].ciudad + '</td>' +
                       '<td>' + resultado[i].correo_principal + '</td>' +
                       '<td>' + resultado[i].correo_facturacion + '</td>' +
                       '<td>' + resultado[i].telefono + '</td>' +
                       '</tr>';
        }
  
        tablaHTML += '</table>';
  
        document.getElementById('resultado').innerHTML = tablaHTML;
      }
    };
  
    // Enviar los datos de búsqueda al servidor
    var params = 'nombre_buscar=' + encodeURIComponent(nombre);
    xhr.send(params);
  });
  