function cargarCiudades() {
    var departamentoSelect = document.getElementById("departamento");
    var ciudadSelect = document.getElementById("ciudad");
    
    // Limpiar las opciones anteriores
    ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
    
    // Obtener el valor seleccionado del departamento
    var departamento = departamentoSelect.value;
    
    // Añadir las opciones de ciudad según el departamento seleccionado
    if (departamento === "Amazonas") {
        addOption(ciudadSelect, "leticia", "Leticia");
    } else if (departamento === "Antioquia") {
        addOption(ciudadSelect, "Medellin", "Medellín");
        addOption(ciudadSelect, "Bello", "Bello");
        addOption(ciudadSelect, "Itagui", "Itagüí");
        // Agrega más opciones de ciudad para Antioquia aquí
    }
    else if (departamento === "Arauca") {
        addOption(ciudadSelect, "Arauca", "Arauca");
        addOption(ciudadSelect, "arauquita", "Arauquita");
        addOption(ciudadSelect, "Cravo Norte", "Cravo Norte");
        addOption(ciudadSelect, "Fortul", "Fortul");
        addOption(ciudadSelect, "Puerto Rondón", "Puerto Rondón");
        addOption(ciudadSelect, "Saravena", "Saravena");
        addOption(ciudadSelect, "Tame", "Tame");
        // Agrega más opciones de ciudad para Antioquia aquí
    }
    // Agrega más bloques "else if" para los demás departamentos
    
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function cargarCiudades1() {
    var departamentoSelect = document.getElementById("departamento_legal");
    var ciudadSelect = document.getElementById("ciudad_legal");
    
    // Limpiar las opciones anteriores
    ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
    
    // Obtener el valor seleccionado del departamento
    var departamento = departamentoSelect.value;
    
    // Añadir las opciones de ciudad según el departamento seleccionado
    if (departamento === "Amazonas") {
        addOption(ciudadSelect, "leticia", "Leticia");
    } else if (departamento === "Antioquia") {
        addOption(ciudadSelect, "Medellin", "Medellín");
        addOption(ciudadSelect, "Bello", "Bello");
        addOption(ciudadSelect, "Itagui", "Itagüí");
        // Agrega más opciones de ciudad para Antioquia aquí
    }
    else if (departamento === "Arauca") {
        addOption(ciudadSelect, "Arauca", "Arauca");
        addOption(ciudadSelect, "arauquita", "Arauquita");
        addOption(ciudadSelect, "Cravo Norte", "Cravo Norte");
        addOption(ciudadSelect, "Fortul", "Fortul");
        addOption(ciudadSelect, "Puerto Rondón", "Puerto Rondón");
        addOption(ciudadSelect, "Saravena", "Saravena");
        addOption(ciudadSelect, "Tame", "Tame");
        // Agrega más opciones de ciudad para Antioquia aquí
    }
    // Agrega más bloques "else if" para los demás departamentos
    
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}