function cargarCiudades() {
    var departamentoSelect = document.getElementById("departamento");
    var ciudadSelect = document.getElementById("ciudad");
    
    // Limpiar las opciones anteriores
    ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
    
    // Obtener el valor seleccionado del departamento
    var departamento = departamentoSelect.value;
    
    // Añadir las opciones de ciudad según el departamento seleccionado
    if (departamento === "Amazonas") {
        addOption(ciudadSelect, "Leticia", "Leticia");
        addOption(ciudadSelect, "puerto Nariño", "Puerto Nariño");
        // Agrega más opciones de ciudad aquí
        
    } else if (departamento === "Antioquia") {
        
        addOption(ciudadSelect, "Abejorral", "Abejorral");
        addOption(ciudadSelect, "Abriaquí", "Abriaquí");
        addOption(ciudadSelect, "Alejandría", "Alejandría");
        addOption(ciudadSelect, "Amagá", "Amagá");
        addOption(ciudadSelect, "Amalfi", "Amalfi");
        addOption(ciudadSelect, "Andes", "Andes");
        addOption(ciudadSelect, "Angelópolis", "Angelópolis");
        addOption(ciudadSelect, "Angostura", "Angostura");
        addOption(ciudadSelect, "Anorí", "Anorí");
        addOption(ciudadSelect, "Antioquia", "Antioquia");
        addOption(ciudadSelect, "Anzá", "Anzá");
        addOption(ciudadSelect, "Apartadó", "Apartadó");
        addOption(ciudadSelect, "Arboletes", "Arboletes");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Armenia", "Armenia");
        addOption(ciudadSelect, "Barbosa", "Barbosa");
        addOption(ciudadSelect, "Bello", "Bello");
        addOption(ciudadSelect, "Belmira", "Belmira");
        addOption(ciudadSelect, "Betania", "Betania");
        addOption(ciudadSelect, "Betulia", "Betulia");
        addOption(ciudadSelect, "Briceño", "Briceño");
        addOption(ciudadSelect, "Buriticá", "Buriticá");
        addOption(ciudadSelect, "Cáceres", "Cáceres");
        addOption(ciudadSelect, "Caicedo", "Caicedo");
        addOption(ciudadSelect, "Caldas", "Caldas");
        addOption(ciudadSelect, "Campamento", "Campamento");
        addOption(ciudadSelect, "Cañasgordas", "Cañasgordas");
        addOption(ciudadSelect, "Caracolí", "Caracolí");
        addOption(ciudadSelect, "Caramanta", "Caramanta");
        addOption(ciudadSelect, "Carepa", "Carepa");
        addOption(ciudadSelect, "Carolina del Príncipe", "Carolina del Príncipe");
        addOption(ciudadSelect, "Caucasia", "Caucasia");
        addOption(ciudadSelect, "Chigorodó", "Chigorodó");
        addOption(ciudadSelect, "Cisneros", "Cisneros");
        addOption(ciudadSelect, "Ciudad Bolívar", "Ciudad Bolívar");
        addOption(ciudadSelect, "Cocorná", "Cocorná");
        addOption(ciudadSelect, "Concepción", "Concepción");
        addOption(ciudadSelect, "Concordia", "Concordia");
        addOption(ciudadSelect, "Copacabana", "Copacabana");
        addOption(ciudadSelect, "Dabeiba", "Dabeiba");
        addOption(ciudadSelect, "Don Matías", "Don Matías");
        addOption(ciudadSelect, "Ebéjico", "Ebéjico");
        addOption(ciudadSelect, "El Bagre", "El Bagre");
        addOption(ciudadSelect, "El Carmen de Viboral", "El Carmen de Viboral");
        addOption(ciudadSelect, "El Peñol", "El Peñol");
        addOption(ciudadSelect, "El Retiro", "El Retiro");
        addOption(ciudadSelect, "El Santuario", "El Santuario");
        addOption(ciudadSelect, "Entrerríos", "Entrerríos");
        addOption(ciudadSelect, "Envigado", "Envigado");
        addOption(ciudadSelect, "Fredonia", "Fredonia");
        addOption(ciudadSelect, "Frontino", "Frontino");
        addOption(ciudadSelect, "Giraldo", "Giraldo");
        addOption(ciudadSelect, "Girardota", "Girardota");
        addOption(ciudadSelect, "Gómez Plata", "Gómez Plata");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Guarne", "Guarne");
        addOption(ciudadSelect, "Guatapé", "Guatapé");
        addOption(ciudadSelect, "Heliconia", "Heliconia");
        addOption(ciudadSelect, "Hispania", "Hispania");
        addOption(ciudadSelect, "Itagüí", "Itagüí");
        addOption(ciudadSelect, "Ituango", "Ituango");
        addOption(ciudadSelect, "Jardín", "Jardín");
        addOption(ciudadSelect, "Jericó", "Jericó");
        addOption(ciudadSelect, "La Ceja", "La Ceja");
        addOption(ciudadSelect, "La Estrella", "La Estrella");
        addOption(ciudadSelect, "La Pintada", "La Pintada");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Liborina", "Liborina");
        addOption(ciudadSelect, "Maceo", "Maceo");
        addOption(ciudadSelect, "Marinilla", "Marinilla");
        addOption(ciudadSelect, "Medellin", "Medellín");
        addOption(ciudadSelect, "Montebello", "Montebello");
        addOption(ciudadSelect, "Murindó", "Murindó");
        addOption(ciudadSelect, "Mutatá", "Mutatá");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Necoclí", "Necoclí");
        addOption(ciudadSelect, "Nechí", "Nechí");
        addOption(ciudadSelect, "Olaya", "Olaya");
        addOption(ciudadSelect, "Peque", "Peque");
        addOption(ciudadSelect, "Pueblorrico", "Pueblorrico");
        addOption(ciudadSelect, "Puerto Berrío", "Puerto Berrío");
        addOption(ciudadSelect, "Puerto Nare", "Puerto Nare");
        addOption(ciudadSelect, "Puerto Triunfo", "Puerto Triunfo");
        addOption(ciudadSelect, "Remedios", "Remedios");
        addOption(ciudadSelect, "Retiro", "Retiro");
        addOption(ciudadSelect, "Rionegro", "Rionegro");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "Sabaneta", "Sabaneta");
        addOption(ciudadSelect, "Salgar", "Salgar");
        addOption(ciudadSelect, "San Andrés de Cuerquía", "San Andrés de Cuerquía");
        addOption(ciudadSelect, "San Carlos", "San Carlos");
        addOption(ciudadSelect, "San Francisco", "San Francisco");
        addOption(ciudadSelect, "San Jerónimo", "San Jerónimo");
        addOption(ciudadSelect, "San José de la Montaña", "San José de la Montaña");
        addOption(ciudadSelect, "San Juan de Urabá", "San Juan de Urabá");
        addOption(ciudadSelect, "San Luis", "San Luis");
        addOption(ciudadSelect, "San Pedro de los Milagros", "San Pedro de los Milagros");
        addOption(ciudadSelect, "San Pedro de Urabá", "San Pedro de Urabá");
        addOption(ciudadSelect, "San Rafael", "San Rafael");
        addOption(ciudadSelect, "San Roque", "San Roque");
        addOption(ciudadSelect, "San Vicente", "San Vicente");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santa Fe de Antioquia", "Santa Fe de Antioquia");
        addOption(ciudadSelect, "Santa Rosa de Osos", "Santa Rosa de Osos");
        addOption(ciudadSelect, "Santo Domingo", "Santo Domingo");
        addOption(ciudadSelect, "Segovia", "Segovia");
        addOption(ciudadSelect, "Sonsón", "Sonsón");
        addOption(ciudadSelect, "Sopetrán", "Sopetrán");
        addOption(ciudadSelect, "Támesis", "Támesis");
        addOption(ciudadSelect, "Tarazá", "Tarazá");
        addOption(ciudadSelect, "Tarso", "Tarso");
        addOption(ciudadSelect, "Titiribí", "Titiribí");
        addOption(ciudadSelect, "Toledo", "Toledo");
        addOption(ciudadSelect, "Turbo", "Turbo");
        addOption(ciudadSelect, "Uramita", "Uramita");
        addOption(ciudadSelect, "Urrao", "Urrao");
        addOption(ciudadSelect, "Valdivia", "Valdivia");
        addOption(ciudadSelect, "Valparaíso", "Valparaíso");
        addOption(ciudadSelect, "Vegachí", "Vegachí");
        addOption(ciudadSelect, "Venecia", "Venecia");
        addOption(ciudadSelect, "Vigía del Fuerte", "Vigía del Fuerte");
        addOption(ciudadSelect, "Yalí", "Yalí");
        addOption(ciudadSelect, "Yarumal", "Yarumal");
        addOption(ciudadSelect, "Yolombó", "Yolombó");
        addOption(ciudadSelect, "Yondó", "Yondó");
        addOption(ciudadSelect, "Zaragoza", "Zaragoza");
        // Agrega más opciones de ciudad aquí
    }
       else if (departamento === "Arauca") {
        addOption(ciudadSelect, "Arauca", "Arauca");
        addOption(ciudadSelect, "Arauquita", "Arauquita");
        addOption(ciudadSelect, "Cravo Norte", "Cravo Norte");
        addOption(ciudadSelect, "Fortul", "Fortul");
        addOption(ciudadSelect, "Puerto Rondón", "Puerto Rondón");
        addOption(ciudadSelect, "Saravena", "Saravena");
        addOption(ciudadSelect, "Tame", "Tame");
        // Agrega más opciones de ciudad aquí
    }
    else if (departamento === "Atlántico") {
        addOption(ciudadSelect, "Barranquilla", "Barranquilla");
        addOption(ciudadSelect, "Baranoa", "Baranoa");
        addOption(ciudadSelect, "Campo de la Cruz", "Campo de la Cruz");
        addOption(ciudadSelect, "Candelaria", "Candelaria");
        addOption(ciudadSelect, "Galapa", "Galapa");
        addOption(ciudadSelect, "Juan de Acosta", "Juan de Acosta");
        addOption(ciudadSelect, "Luruaco", "Luruaco");
        addOption(ciudadSelect, "Malambo", "Malambo");
        addOption(ciudadSelect, "Manatí", "Manatí");
        addOption(ciudadSelect, "Palmar de Varela", "Palmar de Varela");
        addOption(ciudadSelect, "Piojó", "Piojó");
        addOption(ciudadSelect, "Polonuevo", "Polonuevo");
        addOption(ciudadSelect, "Ponedera", "Ponedera");
        addOption(ciudadSelect, "Puerto Colombia", "Puerto Colombia");
        addOption(ciudadSelect, "Repelón", "Repelón");
        addOption(ciudadSelect, "Sabanagrande", "Sabanagrande");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "Santa Lucía", "Santa Lucía");
        addOption(ciudadSelect, "Santo Tomás", "Santo Tomás");
        addOption(ciudadSelect, "Soledad", "Soledad");
        addOption(ciudadSelect, "Suan", "Suan");
        addOption(ciudadSelect, "Tubará", "Tubará");
        addOption(ciudadSelect, "Usiacurí", "Usiacurí");
       // Agrega más opciones de ciudad aquí
    }
    else if (departamento === "Bolívar") {
        addOption(ciudadSelect, "Cartagena de Indias", "Cartagena de Indias");
        addOption(ciudadSelect, "Achí", "Achí");
        addOption(ciudadSelect, "Altos del Rosario", "Altos del Rosario");
        addOption(ciudadSelect, "Arenal", "Arenal");
        addOption(ciudadSelect, "Arjona", "Arjona");
        addOption(ciudadSelect, "Arroyohondo", "Arroyohondo");
        addOption(ciudadSelect, "Barranco de Loba", "Barranco de Loba");
        addOption(ciudadSelect, "Calamar", "Calamar");
        addOption(ciudadSelect, "Cantagallo", "Cantagallo");
        addOption(ciudadSelect, "Cicuco", "Cicuco");
        addOption(ciudadSelect, "Córdoba", "Córdoba");
        addOption(ciudadSelect, "Clemencia", "Clemencia");
        addOption(ciudadSelect, "El Carmen de Bolívar", "El Carmen de Bolívar");
        addOption(ciudadSelect, "El Guamo", "El Guamo");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "Hatillo de Loba", "Hatillo de Loba");
        addOption(ciudadSelect, "Magangué", "Magangué");
        addOption(ciudadSelect, "Mahates", "Mahates");
        addOption(ciudadSelect, "Margarita", "Margarita");
        addOption(ciudadSelect, "María la Baja", "María la Baja");
        addOption(ciudadSelect, "Montecristo", "Montecristo");
        addOption(ciudadSelect, "Mompós", "Mompós");
        addOption(ciudadSelect, "Morales", "Morales");
        addOption(ciudadSelect, "Norosí", "Norosí");
        addOption(ciudadSelect, "Pinillos", "Pinillos");
        addOption(ciudadSelect, "Regidor", "Regidor");
        addOption(ciudadSelect, "Río Viejo", "Río Viejo");
        addOption(ciudadSelect, "San Cristóbal", "San Cristóbal");
        addOption(ciudadSelect, "San Estanislao", "San Estanislao");
        addOption(ciudadSelect, "San Fernando", "San Fernando");
        addOption(ciudadSelect, "San Jacinto", "San Jacinto");
        addOption(ciudadSelect, "San Jacinto del Cauca", "San Jacinto del Cauca");
        addOption(ciudadSelect, "San Juan Nepomuceno", "San Juan Nepomuceno");
        addOption(ciudadSelect, "San Martín de Loba", "San Martín de Loba");
        addOption(ciudadSelect, "San Pablo", "San Pablo");
        addOption(ciudadSelect, "Santa Catalina", "Santa Catalina");
        addOption(ciudadSelect, "Santa Rosa", "Santa Rosa");
        addOption(ciudadSelect, "Santa Rosa del Sur", "Santa Rosa del Sur");
        addOption(ciudadSelect, "Simití", "Simití");
        addOption(ciudadSelect, "Soplaviento", "Soplaviento");
        addOption(ciudadSelect, "Talaigua Nuevo", "Talaigua Nuevo");
        addOption(ciudadSelect, "Tiquisio", "Tiquisio");
        addOption(ciudadSelect, "Turbaco", "Turbaco");
        addOption(ciudadSelect, "Turbaná", "Turbaná");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        addOption(ciudadSelect, "Zambrano", "Zambrano");
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Boyacá") {
        addOption(ciudadSelect, "Tunja", "Tunja");
        addOption(ciudadSelect, "Almeida", "Almeida");
        addOption(ciudadSelect, "Aquitania", "Aquitania");
        addOption(ciudadSelect, "Arcabuco", "Arcabuco");
        addOption(ciudadSelect, "Belén", "Belén");
        addOption(ciudadSelect, "Berbeo", "Berbeo");
        addOption(ciudadSelect, "Betéitiva", "Betéitiva");
        addOption(ciudadSelect, "Boavita", "Boavita");
        addOption(ciudadSelect, "Boyacá", "Boyacá");
        addOption(ciudadSelect, "Briceño", "Briceño");
        addOption(ciudadSelect, "Buena Vista", "Buena Vista");
        addOption(ciudadSelect, "Busbanzá", "Busbanzá");
        addOption(ciudadSelect, "Caldas", "Caldas");
        addOption(ciudadSelect, "Campohermoso", "Campohermoso");
        addOption(ciudadSelect, "Cerinza", "Cerinza");
        addOption(ciudadSelect, "Chinavita", "Chinavita");
        addOption(ciudadSelect, "Chiquinquirá", "Chiquinquirá");
        addOption(ciudadSelect, "Chiscas", "Chiscas");
        addOption(ciudadSelect, "Chita", "Chita");
        addOption(ciudadSelect, "Chitaraque", "Chitaraque");
        addOption(ciudadSelect, "Chivatá", "Chivatá");
        addOption(ciudadSelect, "Chivor", "Chivor");
        addOption(ciudadSelect, "Ciénega", "Ciénega");
        addOption(ciudadSelect, "Cómbita", "Cómbita");
        addOption(ciudadSelect, "Coper", "Coper");
        addOption(ciudadSelect, "Corrales", "Corrales");
        addOption(ciudadSelect, "Covarachía", "Covarachía");
        addOption(ciudadSelect, "Cubará", "Cubará");
        addOption(ciudadSelect, "Cucaita", "Cucaita");
        addOption(ciudadSelect, "Cuítiva", "Cuítiva");
        addOption(ciudadSelect, "Duitama", "Duitama");
        addOption(ciudadSelect, "El Cocuy", "El Cocuy");
        addOption(ciudadSelect, "El Espino", "El Espino");
        addOption(ciudadSelect, "Firavitoba", "Firavitoba");
        addOption(ciudadSelect, "Floresta", "Floresta");
        addOption(ciudadSelect, "Gachantivá", "Gachantivá");
        addOption(ciudadSelect, "Gameza", "Gameza");
        addOption(ciudadSelect, "Garagoa", "Garagoa");
        addOption(ciudadSelect, "Guacamayas", "Guacamayas");
        addOption(ciudadSelect, "Guateque", "Guateque");
        addOption(ciudadSelect, "Guayatá", "Guayatá");
        addOption(ciudadSelect, "Güicán", "Güicán");
        addOption(ciudadSelect, "Iza", "Iza");
        addOption(ciudadSelect, "Jenesano", "Jenesano");
        addOption(ciudadSelect, "Jericó", "Jericó");
        addOption(ciudadSelect, "La Capilla", "La Capilla");
        addOption(ciudadSelect, "La Uvita", "La Uvita");
        addOption(ciudadSelect, "La Victoria", "La Victoria");
        addOption(ciudadSelect, "Labranzagrande", "Labranzagrande");
        addOption(ciudadSelect, "Macanal", "Macanal");
        addOption(ciudadSelect, "Maripí", "Maripí");
        addOption(ciudadSelect, "Miraflores", "Miraflores");
        addOption(ciudadSelect, "Mongua", "Mongua");
        addOption(ciudadSelect, "Monguí", "Monguí");
        addOption(ciudadSelect, "Moniquirá", "Moniquirá");
        addOption(ciudadSelect, "Motavita", "Motavita");
        addOption(ciudadSelect, "Muzo", "Muzo");
        addOption(ciudadSelect, "Nobsa", "Nobsa");
        addOption(ciudadSelect, "Nuevo Colón", "Nuevo Colón");
        addOption(ciudadSelect, "Oicatá", "Oicatá");
        addOption(ciudadSelect, "Otanche", "Otanche");
        addOption(ciudadSelect, "Pachavita", "Pachavita");
        addOption(ciudadSelect, "Páez", "Páez");
        addOption(ciudadSelect, "Paipa", "Paipa");
        addOption(ciudadSelect, "Pajarito", "Pajarito");
        addOption(ciudadSelect, "Panqueba", "Panqueba");
        addOption(ciudadSelect, "Pauna", "Pauna");
        addOption(ciudadSelect, "Paya", "Paya");
        addOption(ciudadSelect, "Paz de Río", "Paz de Río");
        addOption(ciudadSelect, "Pesca", "Pesca");
        addOption(ciudadSelect, "Pisba", "Pisba");
        addOption(ciudadSelect, "Puerto Boyacá", "Puerto Boyacá");
        addOption(ciudadSelect, "Quípama", "Quípama");
        addOption(ciudadSelect, "Ramiriquí", "Ramiriquí");
        addOption(ciudadSelect, "Ráquira", "Ráquira");
        addOption(ciudadSelect, "Rondón", "Rondón");
        addOption(ciudadSelect, "Saboyá", "Saboyá");
        addOption(ciudadSelect, "Sáchica", "Sáchica");
        addOption(ciudadSelect, "Samacá", "Samacá");
        addOption(ciudadSelect, "San Eduardo", "San Eduardo");
        addOption(ciudadSelect, "San José de Pare", "San José de Pare");
        addOption(ciudadSelect, "San Luis de Gaceno", "San Luis de Gaceno");
        addOption(ciudadSelect, "San Mateo", "San Mateo");
        addOption(ciudadSelect, "San Miguel de Sema", "San Miguel de Sema");
        addOption(ciudadSelect, "San Pablo de Borbur", "San Pablo de Borbur");
        addOption(ciudadSelect, "Santa María", "Santa María");
        addOption(ciudadSelect, "Santa Rosa de Viterbo", "Santa Rosa de Viterbo");
        addOption(ciudadSelect, "Santa Sofía", "Santa Sofía");
        addOption(ciudadSelect, "Santana", "Santana");
        addOption(ciudadSelect, "Sativanorte", "Sativanorte");
        addOption(ciudadSelect, "Sativasur", "Sativasur");
        addOption(ciudadSelect, "Siachoque", "Siachoque");
        addOption(ciudadSelect, "Soatá", "Soatá");
        addOption(ciudadSelect, "Socotá", "Socotá");
        addOption(ciudadSelect, "Socha", "Socha");
        addOption(ciudadSelect, "Sogamoso", "Sogamoso");
        addOption(ciudadSelect, "Somondoco", "Somondoco");
        addOption(ciudadSelect, "Sora", "Sora");
        addOption(ciudadSelect, "Soracá", "Soracá");
        addOption(ciudadSelect, "Sotaquirá", "Sotaquirá");
        addOption(ciudadSelect, "Susacón", "Susacón");
        addOption(ciudadSelect, "Sutamarchán", "Sutamarchán");
        addOption(ciudadSelect, "Sutatenza", "Sutatenza");
        addOption(ciudadSelect, "Tasco", "Tasco");
        addOption(ciudadSelect, "Tenza", "Tenza");
        addOption(ciudadSelect, "Tibaná", "Tibaná");
        addOption(ciudadSelect, "Tibasosa", "Tibasosa");
        addOption(ciudadSelect, "Tinjacá", "Tinjacá");
        addOption(ciudadSelect, "Tipacoque", "Tipacoque");
        addOption(ciudadSelect, "Toca", "Toca");
        addOption(ciudadSelect, "Togüí", "Togüí");
        addOption(ciudadSelect, "Topagá", "Topagá");
        addOption(ciudadSelect, "Tota", "Tota");
        addOption(ciudadSelect, "Tununguá", "Tununguá");
        addOption(ciudadSelect, "Turmequé", "Turmequé");
        addOption(ciudadSelect, "Tuta", "Tuta");
        addOption(ciudadSelect, "Tutazá", "Tutazá");
        addOption(ciudadSelect, "Umbita", "Umbita");
        addOption(ciudadSelect, "Ventaquemada", "Ventaquemada");
        addOption(ciudadSelect, "Viracachá", "Viracachá");
        addOption(ciudadSelect, "Zetaquirá", "Zetaquirá");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Caldas") {
        addOption(ciudadSelect, "Manizales", "Manizales");
        addOption(ciudadSelect, "Aguadas", "Aguadas");
        addOption(ciudadSelect, "Anserma", "Anserma");
        addOption(ciudadSelect, "Aranzazu", "Aranzazu");
        addOption(ciudadSelect, "Belalcázar", "Belalcázar");
        addOption(ciudadSelect, "Chinchiná", "Chinchiná");
        addOption(ciudadSelect, "Filadelfia", "Filadelfia");
        addOption(ciudadSelect, "La Dorada", "La Dorada");
        addOption(ciudadSelect, "La Merced", "La Merced");
        addOption(ciudadSelect, "Manzanares", "Manzanares");
        addOption(ciudadSelect, "Marmato", "Marmato");
        addOption(ciudadSelect, "Marquetalia", "Marquetalia");
        addOption(ciudadSelect, "Marulanda", "Marulanda");
        addOption(ciudadSelect, "Neira", "Neira");
        addOption(ciudadSelect, "Norcasia", "Norcasia");
        addOption(ciudadSelect, "Pácora", "Pácora");
        addOption(ciudadSelect, "Palestina", "Palestina");
        addOption(ciudadSelect, "Pensilvania", "Pensilvania");
        addOption(ciudadSelect, "Riosucio", "Riosucio");
        addOption(ciudadSelect, "Risaralda", "Risaralda");
        addOption(ciudadSelect, "Salamina", "Salamina");
        addOption(ciudadSelect, "Samaná", "Samaná");
        addOption(ciudadSelect, "San José", "San José");
        addOption(ciudadSelect, "Supía", "Supía");
        addOption(ciudadSelect, "Victoria", "Victoria");
        addOption(ciudadSelect, "Villamaría", "Villamaría");
        addOption(ciudadSelect, "Viterbo", "Viterbo");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Caquetá") {
        addOption(ciudadSelect, "Florencia", "Florencia");
        addOption(ciudadSelect, "Albania", "Albania");
        addOption(ciudadSelect, "Belén de los Andaquíes", "Belén de los Andaquíes");
        addOption(ciudadSelect, "Cartagena del Chairá", "Cartagena del Chairá");
        addOption(ciudadSelect, "Curillo", "Curillo");
        addOption(ciudadSelect, "El Doncello", "El Doncello");
        addOption(ciudadSelect, "El Paujil", "El Paujil");
        addOption(ciudadSelect, "La Montañita", "La Montañita");
        addOption(ciudadSelect, "Milán", "Milán");
        addOption(ciudadSelect, "Morelia", "Morelia");
        addOption(ciudadSelect, "Puerto Rico", "Puerto Rico");
        addOption(ciudadSelect, "San José del Fragua", "San José del Fragua");
        addOption(ciudadSelect, "San Vicente del Caguán", "San Vicente del Caguán");
        addOption(ciudadSelect, "Solano", "Solano");
        addOption(ciudadSelect, "Solita", "Solita");
        addOption(ciudadSelect, "Valparaíso", "Valparaíso");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Casanare") {
        addOption(ciudadSelect, "Yopal", "Yopal");
        addOption(ciudadSelect, "Aguazul", "Aguazul");
        addOption(ciudadSelect, "Chámeza", "Chámeza");
        addOption(ciudadSelect, "Hato Corozal", "Hato Corozal");
        addOption(ciudadSelect, "La Salina", "La Salina");
        addOption(ciudadSelect, "Maní", "Maní");
        addOption(ciudadSelect, "Monterrey", "Monterrey");
        addOption(ciudadSelect, "Nunchía", "Nunchía");
        addOption(ciudadSelect, "Orocué", "Orocué");
        addOption(ciudadSelect, "Paz de Ariporo", "Paz de Ariporo");
        addOption(ciudadSelect, "Pore", "Pore");
        addOption(ciudadSelect, "Recetor", "Recetor");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "San Luis de Palenque", "San Luis de Palenque");
        addOption(ciudadSelect, "Támara", "Támara");
        addOption(ciudadSelect, "Tauramena", "Tauramena");
        addOption(ciudadSelect, "Trinidad", "Trinidad");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cauca") {
        addOption(ciudadSelect, "Popayán", "Popayán");
        addOption(ciudadSelect, "Almaguer", "Almaguer");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Balboa", "Balboa");
        addOption(ciudadSelect, "Bolívar", "Bolívar");
        addOption(ciudadSelect, "Buenos Aires", "Buenos Aires");
        addOption(ciudadSelect, "Cajibío", "Cajibío");
        addOption(ciudadSelect, "Caldono", "Caldono");
        addOption(ciudadSelect, "Caloto", "Caloto");
        addOption(ciudadSelect, "Corinto", "Corinto");
        addOption(ciudadSelect, "El Tambo", "El Tambo");
        addOption(ciudadSelect, "Florencia", "Florencia");
        addOption(ciudadSelect, "Guachene", "Guachene");
        addOption(ciudadSelect, "Guapi", "Guapi");
        addOption(ciudadSelect, "Inzá", "Inzá");
        addOption(ciudadSelect, "Jambaló", "Jambaló");
        addOption(ciudadSelect, "La Sierra", "La Sierra");
        addOption(ciudadSelect, "La Vega", "La Vega");
        addOption(ciudadSelect, "López de Micay", "López de Micay");
        addOption(ciudadSelect, "Mercaderes", "Mercaderes");
        addOption(ciudadSelect, "Miranda", "Miranda");
        addOption(ciudadSelect, "Morales", "Morales");
        addOption(ciudadSelect, "Padilla", "Padilla");
        addOption(ciudadSelect, "Páez", "Páez");
        addOption(ciudadSelect, "Patía", "Patía");
        addOption(ciudadSelect, "Piamonte", "Piamonte");
        addOption(ciudadSelect, "Piendamó", "Piendamó");
        addOption(ciudadSelect, "Puerto Tejada", "Puerto Tejada");
        addOption(ciudadSelect, "Puracé", "Puracé");
        addOption(ciudadSelect, "Rosas", "Rosas");
        addOption(ciudadSelect, "San Sebastián", "San Sebastián");
        addOption(ciudadSelect, "Santander de Quilichao", "Santander de Quilichao");
        addOption(ciudadSelect, "Santa Rosa", "Santa Rosa");
        addOption(ciudadSelect, "Silvia", "Silvia");
        addOption(ciudadSelect, "Sotará", "Sotará");
        addOption(ciudadSelect, "Suárez", "Suárez");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Timbío", "Timbío");
        addOption(ciudadSelect, "Timbiquí", "Timbiquí");
        addOption(ciudadSelect, "Toribío", "Toribío");
        addOption(ciudadSelect, "Totoró", "Totoró");
        addOption(ciudadSelect, "Villa Rica", "Villa Rica");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cesar") {
        addOption(ciudadSelect, "Valledupar", "Valledupar");
        addOption(ciudadSelect, "Aguachica", "Aguachica");
        addOption(ciudadSelect, "Agustín Codazzi", "Agustín Codazzi");
        addOption(ciudadSelect, "Astrea", "Astrea");
        addOption(ciudadSelect, "Becerril", "Becerril");
        addOption(ciudadSelect, "Bosconia", "Bosconia");
        addOption(ciudadSelect, "Chimichagua", "Chimichagua");
        addOption(ciudadSelect, "Chiriguaná", "Chiriguaná");
        addOption(ciudadSelect, "Curumaní", "Curumaní");
        addOption(ciudadSelect, "El Copey", "El Copey");
        addOption(ciudadSelect, "El Paso", "El Paso");
        addOption(ciudadSelect, "Gamarra", "Gamarra");
        addOption(ciudadSelect, "González", "González");
        addOption(ciudadSelect, "La Gloria", "La Gloria");
        addOption(ciudadSelect, "La Jagua de Ibirico", "La Jagua de Ibirico");
        addOption(ciudadSelect, "La Paz", "La Paz");
        addOption(ciudadSelect, "Manaure Balcón del Cesar", "Manaure Balcón del Cesar");
        addOption(ciudadSelect, "Pailitas", "Pailitas");
        addOption(ciudadSelect, "Pelaya", "Pelaya");
        addOption(ciudadSelect, "Pueblo Bello", "Pueblo Bello");
        addOption(ciudadSelect, "Río de Oro", "Río de Oro");
        addOption(ciudadSelect, "San Alberto", "San Alberto");
        addOption(ciudadSelect, "San Diego", "San Diego");
        addOption(ciudadSelect, "San Martín", "San Martín");
        addOption(ciudadSelect, "Tamalameque", "Tamalameque");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Chocó") {
        addOption(ciudadSelect, "Quibdó", "Quibdó");
        addOption(ciudadSelect, "Acandí", "Acandí");
        addOption(ciudadSelect, "Alto Baudó", "Alto Baudó");
        addOption(ciudadSelect, "Bagadó", "Bagadó");
        addOption(ciudadSelect, "Bahía Solano", "Bahía Solano");
        addOption(ciudadSelect, "Bajo Baudó", "Bajo Baudó");
        addOption(ciudadSelect, "Bojayá", "Bojayá");
        addOption(ciudadSelect, "Cértegui", "Cértegui");
        addOption(ciudadSelect, "Condoto", "Condoto");
        addOption(ciudadSelect, "El Cantón del San Pablo", "El Cantón del San Pablo");
        addOption(ciudadSelect, "El Carmen de Atrato", "El Carmen de Atrato");
        addOption(ciudadSelect, "El Litoral del San Juan", "El Litoral del San Juan");
        addOption(ciudadSelect, "Istmina", "Istmina");
        addOption(ciudadSelect, "Juradó", "Juradó");
        addOption(ciudadSelect, "Lloró", "Lloró");
        addOption(ciudadSelect, "Medio Atrato", "Medio Atrato");
        addOption(ciudadSelect, "Medio Baudó", "Medio Baudó");
        addOption(ciudadSelect, "Medio San Juan", "Medio San Juan");
        addOption(ciudadSelect, "Nóvita", "Nóvita");
        addOption(ciudadSelect, "Nuquí", "Nuquí");
        addOption(ciudadSelect, "Río Iró", "Río Iró");
        addOption(ciudadSelect, "Río Quito", "Río Quito");
        addOption(ciudadSelect, "Riosucio", "Riosucio");
        addOption(ciudadSelect, "San José del Palmar", "San José del Palmar");
        addOption(ciudadSelect, "Sipí", "Sipí");
        addOption(ciudadSelect, "Tadó", "Tadó");
        addOption(ciudadSelect, "Unguía", "Unguía");
        addOption(ciudadSelect, "Unión Panamericana", "Unión Panamericana");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Córdoba") {
        addOption(ciudadSelect, "Montería", "Montería");
        addOption(ciudadSelect, "Ayapel", "Ayapel");
        addOption(ciudadSelect, "Buenavista", "Buenavista");
        addOption(ciudadSelect, "Canalete", "Canalete");
        addOption(ciudadSelect, "Cereté", "Cereté");
        addOption(ciudadSelect, "Chimá", "Chimá");
        addOption(ciudadSelect, "Chinú", "Chinú");
        addOption(ciudadSelect, "Ciénaga de Oro", "Ciénaga de Oro");
        addOption(ciudadSelect, "Cotorra", "Cotorra");
        addOption(ciudadSelect, "La Apartada", "La Apartada");
        addOption(ciudadSelect, "Lorica", "Lorica");
        addOption(ciudadSelect, "Los Córdobas", "Los Córdobas");
        addOption(ciudadSelect, "Momil", "Momil");
        addOption(ciudadSelect, "Montelíbano", "Montelíbano");
        addOption(ciudadSelect, "Moñitos", "Moñitos");
        addOption(ciudadSelect, "Planeta Rica", "Planeta Rica");
        addOption(ciudadSelect, "Pueblo Nuevo", "Pueblo Nuevo");
        addOption(ciudadSelect, "Puerto Escondido", "Puerto Escondido");
        addOption(ciudadSelect, "Puerto Libertador", "Puerto Libertador");
        addOption(ciudadSelect, "Purísima", "Purísima");
        addOption(ciudadSelect, "Sahagún", "Sahagún");
        addOption(ciudadSelect, "San Andrés de Sotavento", "San Andrés de Sotavento");
        addOption(ciudadSelect, "San Antero", "San Antero");
        addOption(ciudadSelect, "San Bernardo del Viento", "San Bernardo del Viento");
        addOption(ciudadSelect, "San Carlos", "San Carlos");
        addOption(ciudadSelect, "San José de Uré", "San José de Uré");
        addOption(ciudadSelect, "San Pelayo", "San Pelayo");
        addOption(ciudadSelect, "Tierralta", "Tierralta");
        addOption(ciudadSelect, "Tuchín", "Tuchín");
        addOption(ciudadSelect, "Valencia", "Valencia");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cundinamarca") {
        addOption(ciudadSelect, "Bogotá, D.C.", "Bogotá, D.C.");
        addOption(ciudadSelect, "Agua de Dios", "Agua de Dios");
        addOption(ciudadSelect, "Albán", "Albán");
        addOption(ciudadSelect, "Anapoima", "Anapoima");
        addOption(ciudadSelect, "Anolaima", "Anolaima");
        addOption(ciudadSelect, "Apulo", "Apulo");
        addOption(ciudadSelect, "Arbeláez", "Arbeláez");
        addOption(ciudadSelect, "Beltrán", "Beltrán");
        addOption(ciudadSelect, "Bituima", "Bituima");
        addOption(ciudadSelect, "Bojacá", "Bojacá");
        addOption(ciudadSelect, "Cabrera", "Cabrera");
        addOption(ciudadSelect, "Cachipay", "Cachipay");
        addOption(ciudadSelect, "Cajicá", "Cajicá");
        addOption(ciudadSelect, "Caparrapí", "Caparrapí");
        addOption(ciudadSelect, "Cáqueza", "Cáqueza");
        addOption(ciudadSelect, "Carmen de Carupa", "Carmen de Carupa");
        addOption(ciudadSelect, "Chaguaní", "Chaguaní");
        addOption(ciudadSelect, "Chía", "Chía");
        addOption(ciudadSelect, "Chipaque", "Chipaque");
        addOption(ciudadSelect, "Choachí", "Choachí");
        addOption(ciudadSelect, "Chocontá", "Chocontá");
        addOption(ciudadSelect, "Cogua", "Cogua");
        addOption(ciudadSelect, "Cota", "Cota");
        addOption(ciudadSelect, "Cucunubá", "Cucunubá");
        addOption(ciudadSelect, "El Colegio", "El Colegio");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "El Rosal", "El Rosal");
        addOption(ciudadSelect, "Facatativá", "Facatativá");
        addOption(ciudadSelect, "Fómeque", "Fómeque");
        addOption(ciudadSelect, "Fosca", "Fosca");
        addOption(ciudadSelect, "Funza", "Funza");
        addOption(ciudadSelect, "Fúquene", "Fúquene");
        addOption(ciudadSelect, "Fusagasugá", "Fusagasugá");
        addOption(ciudadSelect, "Gachalá", "Gachalá");
        addOption(ciudadSelect, "Gachancipá", "Gachancipá");
        addOption(ciudadSelect, "Gachetá", "Gachetá");
        addOption(ciudadSelect, "Gama", "Gama");
        addOption(ciudadSelect, "Girardot", "Girardot");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guachetá", "Guachetá");
        addOption(ciudadSelect, "Guaduas", "Guaduas");
        addOption(ciudadSelect, "Guasca", "Guasca");
        addOption(ciudadSelect, "Guataquí", "Guataquí");
        addOption(ciudadSelect, "Guatavita", "Guatavita");
        addOption(ciudadSelect, "Guayabal de Síquima", "Guayabal de Síquima");
        addOption(ciudadSelect, "Guayabetal", "Guayabetal");
        addOption(ciudadSelect, "Gutiérrez", "Gutiérrez");
        addOption(ciudadSelect, "Jerusalén", "Jerusalén");
        addOption(ciudadSelect, "Junín", "Junín");
        addOption(ciudadSelect, "La Calera", "La Calera");
        addOption(ciudadSelect, "La Mesa", "La Mesa");
        addOption(ciudadSelect, "La Palma", "La Palma");
        addOption(ciudadSelect, "La Peña", "La Peña");
        addOption(ciudadSelect, "La Vega", "La Vega");
        addOption(ciudadSelect, "Lenguazaque", "Lenguazaque");
        addOption(ciudadSelect, "Machetá", "Machetá");
        addOption(ciudadSelect, "Madrid", "Madrid");
        addOption(ciudadSelect, "Manta", "Manta");
        addOption(ciudadSelect, "Medina", "Medina");
        addOption(ciudadSelect, "Mosquera", "Mosquera");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Nemocón", "Nemocón");
        addOption(ciudadSelect, "Nilo", "Nilo");
        addOption(ciudadSelect, "Nimaima", "Nimaima");
        addOption(ciudadSelect, "Nocaima", "Nocaima");
        addOption(ciudadSelect, "Venecia", "Venecia");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Guainía") {
        addOption(ciudadSelect, "Inírida", "Inírida");
        addOption(ciudadSelect, "Barranco Minas", "Barranco Minas");
        addOption(ciudadSelect, "Mapiripana", "Mapiripana");
        addOption(ciudadSelect, "Cacahual", "Cacahual");
        addOption(ciudadSelect, "San Felipe", "San Felipe");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Guaviare") {
        addOption(ciudadSelect, "San José del Guaviare", "San José del Guaviare");
        addOption(ciudadSelect, "Calamar", "Calamar");
        addOption(ciudadSelect, "El Retorno", "El Retorno");
        addOption(ciudadSelect, "Miraflores", "Miraflores");
        addOption(ciudadSelect, "El Dorado", "El Dorado");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Huila") {
        addOption(ciudadSelect, "Neiva", "Neiva");
        addOption(ciudadSelect, "Acevedo", "Acevedo");
        addOption(ciudadSelect, "Agrado", "Agrado");
        addOption(ciudadSelect, "Aipe", "Aipe");
        addOption(ciudadSelect, "Algeciras", "Algeciras");
        addOption(ciudadSelect, "Altamira", "Altamira");
        addOption(ciudadSelect, "Baraya", "Baraya");
        addOption(ciudadSelect, "Campoalegre", "Campoalegre");
        addOption(ciudadSelect, "Colombia", "Colombia");
        addOption(ciudadSelect, "Elías", "Elías");
        addOption(ciudadSelect, "Garzón", "Garzón");
        addOption(ciudadSelect, "Gigante", "Gigante");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Hobo", "Hobo");
        addOption(ciudadSelect, "Íquira", "Íquira");
        addOption(ciudadSelect, "Isnos", "Isnos");
        addOption(ciudadSelect, "La Argentina", "La Argentina");
        addOption(ciudadSelect, "La Plata", "La Plata");
        addOption(ciudadSelect, "Nátaga", "Nátaga");
        addOption(ciudadSelect, "Oporapa", "Oporapa");
        addOption(ciudadSelect, "Paicol", "Paicol");
        addOption(ciudadSelect, "Palermo", "Palermo");
        addOption(ciudadSelect, "Palestina", "Palestina");
        addOption(ciudadSelect, "Pital", "Pital");
        addOption(ciudadSelect, "Pitalito", "Pitalito");
        addOption(ciudadSelect, "Rivera", "Rivera");
        addOption(ciudadSelect, "Saladoblanco", "Saladoblanco");
        addOption(ciudadSelect, "San Agustín", "San Agustín");
        addOption(ciudadSelect, "Santa María", "Santa María");
        addOption(ciudadSelect, "Suaza", "Suaza");
        addOption(ciudadSelect, "Tarqui", "Tarqui");
        addOption(ciudadSelect, "Tello", "Tello");
        addOption(ciudadSelect, "Teruel", "Teruel");
        addOption(ciudadSelect, "Tesalia", "Tesalia");
        addOption(ciudadSelect, "Timaná", "Timaná");
        addOption(ciudadSelect, "Villavieja", "Villavieja");
        addOption(ciudadSelect, "Yaguará", "Yaguará");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "La Guajira") {
        addOption(ciudadSelect, "Riohacha", "Riohacha");
        addOption(ciudadSelect, "Albania", "Albania");
        addOption(ciudadSelect, "Barrancas", "Barrancas");
        addOption(ciudadSelect, "Dibulla", "Dibulla");
        addOption(ciudadSelect, "Distracción", "Distracción");
        addOption(ciudadSelect, "El Molino", "El Molino");
        addOption(ciudadSelect, "Fonseca", "Fonseca");
        addOption(ciudadSelect, "Hatonuevo", "Hatonuevo");
        addOption(ciudadSelect, "La Jagua del Pilar", "La Jagua del Pilar");
        addOption(ciudadSelect, "Maicao", "Maicao");
        addOption(ciudadSelect, "Manaure", "Manaure");
        addOption(ciudadSelect, "San Juan del Cesar", "San Juan del Cesar");
        addOption(ciudadSelect, "Uribia", "Uribia");
        addOption(ciudadSelect, "Urumita", "Urumita");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Magdalena") {
        addOption(ciudadSelect, "Santa Marta", "Santa Marta");
        addOption(ciudadSelect, "Algarrobo", "Algarrobo");
        addOption(ciudadSelect, "Aracataca", "Aracataca");
        addOption(ciudadSelect, "Ariguaní", "Ariguaní");
        addOption(ciudadSelect, "Cerro de San Antonio", "Cerro de San Antonio");
        addOption(ciudadSelect, "Chibolo", "Chibolo");
        addOption(ciudadSelect, "Ciénaga", "Ciénaga");
        addOption(ciudadSelect, "Concordia", "Concordia");
        addOption(ciudadSelect, "El Banco", "El Banco");
        addOption(ciudadSelect, "El Piñón", "El Piñón");
        addOption(ciudadSelect, "El Retén", "El Retén");
        addOption(ciudadSelect, "Fundación", "Fundación");
        addOption(ciudadSelect, "Guamal", "Guamal");
        addOption(ciudadSelect, "Nueva Granada", "Nueva Granada");
        addOption(ciudadSelect, "Pedraza", "Pedraza");
        addOption(ciudadSelect, "Pijiño del Carmen", "Pijiño del Carmen");
        addOption(ciudadSelect, "Pivijay", "Pivijay");
        addOption(ciudadSelect, "Plato", "Plato");
        addOption(ciudadSelect, "Puebloviejo", "Puebloviejo");
        addOption(ciudadSelect, "Remolino", "Remolino");
        addOption(ciudadSelect, "Sabanas de San Ángel", "Sabanas de San Ángel");
        addOption(ciudadSelect, "Salamina", "Salamina");
        addOption(ciudadSelect, "San Sebastián de Buenavista", "San Sebastián de Buenavista");
        addOption(ciudadSelect, "San Zenón", "San Zenón");
        addOption(ciudadSelect, "Santa Ana", "Santa Ana");
        addOption(ciudadSelect, "Santa Bárbara de Pinto", "Santa Bárbara de Pinto");
        addOption(ciudadSelect, "Sitionuevo", "Sitionuevo");
        addOption(ciudadSelect, "Tenerife", "Tenerife");
        addOption(ciudadSelect, "Zapayán", "Zapayán");
        addOption(ciudadSelect, "Zona Bananera", "Zona Bananera");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Meta") {
        addOption(ciudadSelect, "Villavicencio", "Villavicencio");
        addOption(ciudadSelect, "Acacías", "Acacías");
        addOption(ciudadSelect, "Barranca de Upía", "Barranca de Upía");
        addOption(ciudadSelect, "Cabuyaro", "Cabuyaro");
        addOption(ciudadSelect, "Castilla La Nueva", "Castilla La Nueva");
        addOption(ciudadSelect, "Cubarral", "Cubarral");
        addOption(ciudadSelect, "Cumaral", "Cumaral");
        addOption(ciudadSelect, "El Calvario", "El Calvario");
        addOption(ciudadSelect, "El Castillo", "El Castillo");
        addOption(ciudadSelect, "El Dorado", "El Dorado");
        addOption(ciudadSelect, "Fuente de Oro", "Fuente de Oro");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guamal", "Guamal");
        addOption(ciudadSelect, "Mapiripán", "Mapiripán");
        addOption(ciudadSelect, "Mesetas", "Mesetas");
        addOption(ciudadSelect, "La Macarena", "La Macarena");
        addOption(ciudadSelect, "Lejanías", "Lejanías");
        addOption(ciudadSelect, "Puerto Concordia", "Puerto Concordia");
        addOption(ciudadSelect, "Puerto Gaitán", "Puerto Gaitán");
        addOption(ciudadSelect, "Puerto Lleras", "Puerto Lleras");
        addOption(ciudadSelect, "Puerto López", "Puerto López");
        addOption(ciudadSelect, "Puerto Rico", "Puerto Rico");
        addOption(ciudadSelect, "Restrepo", "Restrepo");
        addOption(ciudadSelect, "San Carlos de Guaroa", "San Carlos de Guaroa");
        addOption(ciudadSelect, "San Juan de Arama", "San Juan de Arama");
        addOption(ciudadSelect, "San Juanito", "San Juanito");
        addOption(ciudadSelect, "San Martín", "San Martín");
        addOption(ciudadSelect, "Uribe", "Uribe");
        addOption(ciudadSelect, "Vista Hermosa", "Vista Hermosa");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Nariño") {
        addOption(ciudadSelect, "Pasto", "Pasto");
        addOption(ciudadSelect, "Albán", "Albán");
        addOption(ciudadSelect, "Aldana", "Aldana");
        addOption(ciudadSelect, "Ancuyá", "Ancuyá");
        addOption(ciudadSelect, "Arboleda", "Arboleda");
        addOption(ciudadSelect, "Barbacoas", "Barbacoas");
        addOption(ciudadSelect, "Belén", "Belén");
        addOption(ciudadSelect, "Buesaco", "Buesaco");
        addOption(ciudadSelect, "Colón", "Colón");
        addOption(ciudadSelect, "Consacá", "Consacá");
        addOption(ciudadSelect, "Contadero", "Contadero");
        addOption(ciudadSelect, "Córdoba", "Córdoba");
        addOption(ciudadSelect, "Cuaspud", "Cuaspud");
        addOption(ciudadSelect, "Cumbal", "Cumbal");
        addOption(ciudadSelect, "Cumbitara", "Cumbitara");
        addOption(ciudadSelect, "El Charco", "El Charco");
        addOption(ciudadSelect, "El Peñol", "El Peñol");
        addOption(ciudadSelect, "El Rosario", "El Rosario");
        addOption(ciudadSelect, "El Tablón de Gómez", "El Tablón de Gómez");
        addOption(ciudadSelect, "El Tambo", "El Tambo");
        addOption(ciudadSelect, "Francisco Pizarro", "Francisco Pizarro");
        addOption(ciudadSelect, "Funes", "Funes");
        addOption(ciudadSelect, "Guachucal", "Guachucal");
        addOption(ciudadSelect, "Guaitarilla", "Guaitarilla");
        addOption(ciudadSelect, "Gualmatán", "Gualmatán");
        addOption(ciudadSelect, "Iles", "Iles");
        addOption(ciudadSelect, "Imués", "Imués");
        addOption(ciudadSelect, "Ipiales", "Ipiales");
        addOption(ciudadSelect, "La Cruz", "La Cruz");
        addOption(ciudadSelect, "La Florida", "La Florida");
        addOption(ciudadSelect, "La Llanada", "La Llanada");
        addOption(ciudadSelect, "La Tola", "La Tola");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Leiva", "Leiva");
        addOption(ciudadSelect, "Linares", "Linares");
        addOption(ciudadSelect, "Los Andes", "Los Andes");
        addOption(ciudadSelect, "Magüí Payán", "Magüí Payán");
        addOption(ciudadSelect, "Mallama", "Mallama");
        addOption(ciudadSelect, "Mosquera", "Mosquera");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Olaya Herrera", "Olaya Herrera");
        addOption(ciudadSelect, "Ospina", "Ospina");
        addOption(ciudadSelect, "Policarpa", "Policarpa");
        addOption(ciudadSelect, "Potosí", "Potosí");
        addOption(ciudadSelect, "Providencia", "Providencia");
        addOption(ciudadSelect, "Puerres", "Puerres");
        addOption(ciudadSelect, "Pupiales", "Pupiales");
        addOption(ciudadSelect, "Ricaurte", "Ricaurte");
        addOption(ciudadSelect, "Roberto Payán", "Roberto Payán");
        addOption(ciudadSelect, "Samaniego", "Samaniego");
        addOption(ciudadSelect, "San Bernardo", "San Bernardo");
        addOption(ciudadSelect, "San Lorenzo", "San Lorenzo");
        addOption(ciudadSelect, "San Pablo", "San Pablo");
        addOption(ciudadSelect, "San Pedro de Cartago", "San Pedro de Cartago");
        addOption(ciudadSelect, "Sandoná", "Sandoná");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santacruz", "Santacruz");
        addOption(ciudadSelect, "Sapuyes", "Sapuyes");
        addOption(ciudadSelect, "Taminango", "Taminango");
        addOption(ciudadSelect, "Tangua", "Tangua");
        addOption(ciudadSelect, "Tumaco", "Tumaco");
        addOption(ciudadSelect, "Túquerres", "Túquerres");
        addOption(ciudadSelect, "Yacuanquer", "Yacuanquer");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Norte de Santander") {
        addOption(ciudadSelect, "Cúcuta", "Cúcuta");
        addOption(ciudadSelect, "Ábrego", "Ábrego");
        addOption(ciudadSelect, "Arboledas", "Arboledas");
        addOption(ciudadSelect, "Bochalema", "Bochalema");
        addOption(ciudadSelect, "Bucarasica", "Bucarasica");
        addOption(ciudadSelect, "Cáchira", "Cáchira");
        addOption(ciudadSelect, "Cácota", "Cácota");
        addOption(ciudadSelect, "Chinácota", "Chinácota");
        addOption(ciudadSelect, "Chitagá", "Chitagá");
        addOption(ciudadSelect, "Convención", "Convención");
        addOption(ciudadSelect, "Cucutilla", "Cucutilla");
        addOption(ciudadSelect, "Durania", "Durania");
        addOption(ciudadSelect, "El Carmen", "El Carmen");
        addOption(ciudadSelect, "El Tarra", "El Tarra");
        addOption(ciudadSelect, "El Zulia", "El Zulia");
        addOption(ciudadSelect, "Gramalote", "Gramalote");
        addOption(ciudadSelect, "Hacarí", "Hacarí");
        addOption(ciudadSelect, "Herrán", "Herrán");
        addOption(ciudadSelect, "La Esperanza", "La Esperanza");
        addOption(ciudadSelect, "La Playa de Belén", "La Playa de Belén");
        addOption(ciudadSelect, "Labateca", "Labateca");
        addOption(ciudadSelect, "Los Patios", "Los Patios");
        addOption(ciudadSelect, "Lourdes", "Lourdes");
        addOption(ciudadSelect, "Mutiscua", "Mutiscua");
        addOption(ciudadSelect, "Ocaña", "Ocaña");
        addOption(ciudadSelect, "Pamplona", "Pamplona");
        addOption(ciudadSelect, "Pamplonita", "Pamplonita");
        addOption(ciudadSelect, "Puerto Santander", "Puerto Santander");
        addOption(ciudadSelect, "Ragonvalia", "Ragonvalia");
        addOption(ciudadSelect, "Salazar de Las Palmas", "Salazar de Las Palmas");
        addOption(ciudadSelect, "San Calixto", "San Calixto");
        addOption(ciudadSelect, "San Cayetano", "San Cayetano");
        addOption(ciudadSelect, "Santiago", "Santiago");
        addOption(ciudadSelect, "Sardinata", "Sardinata");
        addOption(ciudadSelect, "Silos", "Silos");
        addOption(ciudadSelect, "Teorama", "Teorama");
        addOption(ciudadSelect, "Tibú", "Tibú");
        addOption(ciudadSelect, "Toledo", "Toledo");
        addOption(ciudadSelect, "Villa Caro", "Villa Caro");
        addOption(ciudadSelect, "Villa del Rosario", "Villa del Rosario");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Putumayo") {
        addOption(ciudadSelect, "Mocoa", "Mocoa");
        addOption(ciudadSelect, "Colón", "Colón");
        addOption(ciudadSelect, "Orito", "Orito");
        addOption(ciudadSelect, "Puerto Asís", "Puerto Asís");
        addOption(ciudadSelect, "Puerto Caicedo", "Puerto Caicedo");
        addOption(ciudadSelect, "Puerto Guzmán", "Puerto Guzmán");
        addOption(ciudadSelect, "Puerto Leguízamo", "Puerto Leguízamo");
        addOption(ciudadSelect, "Sibundoy", "Sibundoy");
        addOption(ciudadSelect, "San Francisco", "San Francisco");
        addOption(ciudadSelect, "San Miguel", "San Miguel");
        addOption(ciudadSelect, "Santiago", "Santiago");
        addOption(ciudadSelect, "Valle del Guamuez", "Valle del Guamuez");
        addOption(ciudadSelect, "Villagarzón", "Villagarzón");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Quindío") {
        addOption(ciudadSelect, "Armenia", "Armenia");
        addOption(ciudadSelect, "Calarcá", "Calarcá");
        addOption(ciudadSelect, "Circasia", "Circasia");
        addOption(ciudadSelect, "Filandia", "Filandia");
        addOption(ciudadSelect, "Génova", "Génova");
        addOption(ciudadSelect, "La Tebaida", "La Tebaida");
        addOption(ciudadSelect, "Montenegro", "Montenegro");
        addOption(ciudadSelect, "Pijao", "Pijao");
        +addOption(ciudadSelect, "Quimbaya", "Quimbaya");
        +addOption(ciudadSelect, "Salento", "Salento");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Risaralda") {
        addOption(ciudadSelect, "Pereira", "Pereira");
        addOption(ciudadSelect, "Apía", "Apía");
        addOption(ciudadSelect, "Balboa", "Balboa");
        addOption(ciudadSelect, "Belén de Umbría", "Belén de Umbría");
        addOption(ciudadSelect, "Dosquebradas", "Dosquebradas");
        addOption(ciudadSelect, "Guática", "Guática");
        addOption(ciudadSelect, "La Celia", "La Celia");
        addOption(ciudadSelect, "La Virginia", "La Virginia");
        addOption(ciudadSelect, "Marsella", "Marsella");
        addOption(ciudadSelect, "Mistrató", "Mistrató");
        addOption(ciudadSelect, "Pueblo Rico", "Pueblo Rico");
        addOption(ciudadSelect, "Quinchía", "Quinchía");
        addOption(ciudadSelect, "Santa Rosa de Cabal", "Santa Rosa de Cabal");
        addOption(ciudadSelect, "Santuario", "Santuario");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "San Andrés y Providencia") {
        addOption(ciudadSelect, "San Andrés", "San Andrés");
        addOption(ciudadSelect, "Providencia", "Providencia");
        addOption(ciudadSelect, "Santa Catalina", "Santa Catalina");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Santander") {
        addOption(ciudadSelect, "Barichara", "Barichara");
        addOption(ciudadSelect, "Barrancabermeja", "Barrancabermeja");
        addOption(ciudadSelect, "Betulia", "Betulia");
        addOption(ciudadSelect, "Bucaramanga", "Bucaramanga");
        addOption(ciudadSelect, "Cabrera", "Cabrera");
        addOption(ciudadSelect, "California", "California");
        addOption(ciudadSelect, "Capitanejo", "Capitanejo");
        addOption(ciudadSelect, "Carcasí", "Carcasí");
        addOption(ciudadSelect, "Cepitá", "Cepitá");
        addOption(ciudadSelect, "Cerrito", "Cerrito");
        addOption(ciudadSelect, "Charalá", "Charalá");
        addOption(ciudadSelect, "Charta", "Charta");
        addOption(ciudadSelect, "Chima", "Chima");
        addOption(ciudadSelect, "Chipatá", "Chipatá");
        addOption(ciudadSelect, "Cimitarra", "Cimitarra");
        addOption(ciudadSelect, "Concepción", "Concepción");
        addOption(ciudadSelect, "Confines", "Confines");
        addOption(ciudadSelect, "Contratación", "Contratación");
        addOption(ciudadSelect, "Coromoro", "Coromoro");
        addOption(ciudadSelect, "Curití", "Curití");
        addOption(ciudadSelect, "El Carmen de Chucurí", "El Carmen de Chucurí");
        addOption(ciudadSelect, "El Guacamayo", "El Guacamayo");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "El Playón", "El Playón");
        addOption(ciudadSelect, "Encino", "Encino");
        addOption(ciudadSelect, "Enciso", "Enciso");
        addOption(ciudadSelect, "Floridablanca", "Floridablanca");
        addOption(ciudadSelect, "Galán", "Galán");
        addOption(ciudadSelect, "Gámbita", "Gámbita");
        addOption(ciudadSelect, "Girón", "Girón");
        addOption(ciudadSelect, "Guaca", "Guaca");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Guapota", "Guapota");
        addOption(ciudadSelect, "Guavatá", "Guavatá");
        addOption(ciudadSelect, "Güepsa", "Güepsa");
        addOption(ciudadSelect, "Hato", "Hato");
        addOption(ciudadSelect, "Jesús María", "Jesús María");
        addOption(ciudadSelect, "Jordán", "Jordán");
        addOption(ciudadSelect, "La Belleza", "La Belleza");
        addOption(ciudadSelect, "Landázuri", "Landázuri");
        addOption(ciudadSelect, "La Paz", "La Paz");
        addOption(ciudadSelect, "Lebríja", "Lebríja");
        addOption(ciudadSelect, "Los Santos", "Los Santos");
        addOption(ciudadSelect, "Macaravita", "Macaravita");
        addOption(ciudadSelect, "Málaga", "Málaga");
        addOption(ciudadSelect, "Matanza", "Matanza");
        addOption(ciudadSelect, "Mogotes", "Mogotes");
        addOption(ciudadSelect, "Molagavita", "Molagavita");
        addOption(ciudadSelect, "Ocamonte", "Ocamonte");
        addOption(ciudadSelect, "Oiba", "Oiba");
        addOption(ciudadSelect, "Onzaga", "Onzaga");
        addOption(ciudadSelect, "Palmar", "Palmar");
        addOption(ciudadSelect, "Palmas del Socorro", "Palmas del Socorro");
        addOption(ciudadSelect, "Páramo", "Páramo");
        addOption(ciudadSelect, "Piedecuesta", "Piedecuesta");
        addOption(ciudadSelect, "Pinchote", "Pinchote");
        addOption(ciudadSelect, "Puente Nacional", "Puente Nacional");
        addOption(ciudadSelect, "Puerto Parra", "Puerto Parra");
        addOption(ciudadSelect, "Puerto Wilches", "Puerto Wilches");
        addOption(ciudadSelect, "Rionegro", "Rionegro");
        addOption(ciudadSelect, "Sabana de Torres", "Sabana de Torres");
        addOption(ciudadSelect, "San Andrés", "San Andrés");
        addOption(ciudadSelect, "San Benito", "San Benito");
        addOption(ciudadSelect, "San Gil", "San Gil");
        addOption(ciudadSelect, "San Joaquín", "San Joaquín");
        addOption(ciudadSelect, "San José de Miranda", "San José de Miranda");
        addOption(ciudadSelect, "San Miguel", "San Miguel");
        addOption(ciudadSelect, "San Vicente de Chucurí", "San Vicente de Chucurí");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santa Helena del Opón", "Santa Helena del Opón");
        addOption(ciudadSelect, "Simacota", "Simacota");
        addOption(ciudadSelect, "Socorro", "Socorro");
        addOption(ciudadSelect, "Suaita", "Suaita");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Suratá", "Suratá");
        addOption(ciudadSelect, "Tona", "Tona");
        addOption(ciudadSelect, "Valle de San José", "Valle de San José");
        addOption(ciudadSelect, "Vélez", "Vélez");
        addOption(ciudadSelect, "Vetas", "Vetas");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        addOption(ciudadSelect, "Zapatoca", "Zapatoca");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Sucre") {
        addOption(ciudadSelect, "Buenavista", "Buenavista");
        addOption(ciudadSelect, "Caimito", "Caimito");
        addOption(ciudadSelect, "Chalán", "Chalán");
        addOption(ciudadSelect, "Colosó", "Colosó");
        addOption(ciudadSelect, "Corozal", "Corozal");
        addOption(ciudadSelect, "Coveñas", "Coveñas");
        addOption(ciudadSelect, "El Roble", "El Roble");
        addOption(ciudadSelect, "Galeras", "Galeras");
        addOption(ciudadSelect, "Guaranda", "Guaranda");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Los Palmitos", "Los Palmitos");
        addOption(ciudadSelect, "Majagual", "Majagual");
        addOption(ciudadSelect, "Morroa", "Morroa");
        addOption(ciudadSelect, "Ovejas", "Ovejas");
        addOption(ciudadSelect, "Palmito", "Palmito");
        addOption(ciudadSelect, "Sampués", "Sampués");
        addOption(ciudadSelect, "San Benito Abad", "San Benito Abad");
        addOption(ciudadSelect, "San Juan de Betulia", "San Juan de Betulia");
        addOption(ciudadSelect, "San Marcos", "San Marcos");
        addOption(ciudadSelect, "San Onofre", "San Onofre");
        addOption(ciudadSelect, "San Pedro", "San Pedro");
        addOption(ciudadSelect, "San Luis de Sincé", "San Luis de Sincé");
        addOption(ciudadSelect, "Sincelejo", "Sincelejo");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Tolú", "Tolú");
        addOption(ciudadSelect, "Tolúviejo", "Tolúviejo");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Tolima") {
        addOption(ciudadSelect, "Alpujarra", "Alpujarra");
        addOption(ciudadSelect, "Alvarado", "Alvarado");
        addOption(ciudadSelect, "Ambalema", "Ambalema");
        addOption(ciudadSelect, "Anzoátegui", "Anzoátegui");
        addOption(ciudadSelect, "Armero", "Armero");
        addOption(ciudadSelect, "Ataco", "Ataco");
        addOption(ciudadSelect, "Cajamarca", "Cajamarca");
        addOption(ciudadSelect, "Carmen de Apicalá", "Carmen de Apicalá");
        addOption(ciudadSelect, "Casabianca", "Casabianca");
        addOption(ciudadSelect, "Chaparral", "Chaparral");
        addOption(ciudadSelect, "Coello", "Coello");
        addOption(ciudadSelect, "Coyaima", "Coyaima");
        addOption(ciudadSelect, "Cunday", "Cunday");
        addOption(ciudadSelect, "Dolores", "Dolores");
        addOption(ciudadSelect, "Espinal", "Espinal");
        addOption(ciudadSelect, "Falan", "Falan");
        addOption(ciudadSelect, "Flandes", "Flandes");
        addOption(ciudadSelect, "Fresno", "Fresno");
        addOption(ciudadSelect, "Guamo", "Guamo");
        addOption(ciudadSelect, "Herveo", "Herveo");
        addOption(ciudadSelect, "Honda", "Honda");
        addOption(ciudadSelect, "Ibagué", "Ibagué");
        addOption(ciudadSelect, "Icononzo", "Icononzo");
        addOption(ciudadSelect, "Lérida", "Lérida");
        addOption(ciudadSelect, "Líbano", "Líbano");
        addOption(ciudadSelect, "Mariquita", "Mariquita");
        addOption(ciudadSelect, "Melgar", "Melgar");
        addOption(ciudadSelect, "Murillo", "Murillo");
        addOption(ciudadSelect, "Natagaima", "Natagaima");
        addOption(ciudadSelect, "Ortega", "Ortega");
        addOption(ciudadSelect, "Palocabildo", "Palocabildo");
        addOption(ciudadSelect, "Piedras", "Piedras");
        addOption(ciudadSelect, "Planadas", "Planadas");
        addOption(ciudadSelect, "Prado", "Prado");
        addOption(ciudadSelect, "Purificación", "Purificación");
        addOption(ciudadSelect, "Rioblanco", "Rioblanco");
        addOption(ciudadSelect, "Roncesvalles", "Roncesvalles");
        addOption(ciudadSelect, "Rovira", "Rovira");
        addOption(ciudadSelect, "Saldaña", "Saldaña");
        addOption(ciudadSelect, "San Antonio", "San Antonio");
        addOption(ciudadSelect, "San Luis", "San Luis");
        addOption(ciudadSelect, "Santa Isabel", "Santa Isabel");
        addOption(ciudadSelect, "Suárez", "Suárez");
        addOption(ciudadSelect, "Valle de San Juan", "Valle de San Juan");
        addOption(ciudadSelect, "Venadillo", "Venadillo");
        addOption(ciudadSelect, "Villahermosa", "Villahermosa");
        addOption(ciudadSelect, "Villarrica", "Villarrica");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Valle del Cauca") {
        addOption(ciudadSelect, "Alcalá", "Alcalá");
        addOption(ciudadSelect, "Andalucía", "Andalucía");
        addOption(ciudadSelect, "Ansermanuevo", "Ansermanuevo");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Bolívar", "Bolívar");
        addOption(ciudadSelect, "Buenaventura", "Buenaventura");
        addOption(ciudadSelect, "Bugalagrande", "Bugalagrande");
        addOption(ciudadSelect, "Caicedonia", "Caicedonia");
        addOption(ciudadSelect, "Cali", "Cali");
        addOption(ciudadSelect, "Calima", "Calima");
        addOption(ciudadSelect, "Candelaria", "Candelaria");
        addOption(ciudadSelect, "Cartago", "Cartago");
        addOption(ciudadSelect, "Dagua", "Dagua");
        addOption(ciudadSelect, "El Águila", "El Águila");
        addOption(ciudadSelect, "El Cairo", "El Cairo");
        addOption(ciudadSelect, "El Cerrito", "El Cerrito");
        addOption(ciudadSelect, "El Dovio", "El Dovio");
        addOption(ciudadSelect, "Florida", "Florida");
        addOption(ciudadSelect, "Ginebra", "Ginebra");
        addOption(ciudadSelect, "Guacarí", "Guacarí");
        addOption(ciudadSelect, "Jamundí", "Jamundí");
        addOption(ciudadSelect, "La Cumbre", "La Cumbre");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "La Victoria", "La Victoria");
        addOption(ciudadSelect, "Obando", "Obando");
        addOption(ciudadSelect, "Palmira", "Palmira");
        addOption(ciudadSelect, "Pradera", "Pradera");
        addOption(ciudadSelect, "Restrepo", "Restrepo");
        addOption(ciudadSelect, "Riofrío", "Riofrío");
        addOption(ciudadSelect, "Roldanillo", "Roldanillo");
        addOption(ciudadSelect, "San Pedro", "San Pedro");
        addOption(ciudadSelect, "Sevilla", "Sevilla");
        addOption(ciudadSelect, "Toro", "Toro");
        addOption(ciudadSelect, "Trujillo", "Trujillo");
        addOption(ciudadSelect, "Tuluá", "Tuluá");
        addOption(ciudadSelect, "Ulloa", "Ulloa");
        addOption(ciudadSelect, "Versalles", "Versalles");
        addOption(ciudadSelect, "Vijes", "Vijes");
        addOption(ciudadSelect, "Yotoco", "Yotoco");
        addOption(ciudadSelect, "Yumbo", "Yumbo");
        addOption(ciudadSelect, "Zarzal", "Zarzal");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Vaupés") {
        addOption(ciudadSelect, "Mitú", "Mitú");
        addOption(ciudadSelect, "Carurú", "Carurú");
        addOption(ciudadSelect, "Taraira", "Taraira");
        addOption(ciudadSelect, "Pacoa", "Pacoa");
        addOption(ciudadSelect, "Yavaraté", "Yavaraté");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Vichada") {
        addOption(ciudadSelect, "Puerto Carreño", "Puerto Carreño");
        addOption(ciudadSelect, "La Primavera", "La Primavera");
        addOption(ciudadSelect, "Santa Rosalía", "Santa Rosalía");
        addOption(ciudadSelect, "Cumaribo", "Cumaribo");
        
        // Agrega más opciones de ciudad aquí
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
        addOption(ciudadSelect, "Leticia", "Leticia");
        addOption(ciudadSelect, "Puerto Nariño", "Puerto Nariño");
        // Agrega más opciones de ciudad aquí
        
    } else if (departamento === "Antioquia") {
        
        addOption(ciudadSelect, "Abejorral", "Abejorral");
        addOption(ciudadSelect, "Abriaquí", "Abriaquí");
        addOption(ciudadSelect, "Alejandría", "Alejandría");
        addOption(ciudadSelect, "Amagá", "Amagá");
        addOption(ciudadSelect, "Amalfi", "Amalfi");
        addOption(ciudadSelect, "Andes", "Andes");
        addOption(ciudadSelect, "Angelópolis", "Angelópolis");
        addOption(ciudadSelect, "Angostura", "Angostura");
        addOption(ciudadSelect, "Anorí", "Anorí");
        addOption(ciudadSelect, "Antioquia", "Antioquia");
        addOption(ciudadSelect, "Anzá", "Anzá");
        addOption(ciudadSelect, "Apartadó", "Apartadó");
        addOption(ciudadSelect, "Arboletes", "Arboletes");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Armenia", "Armenia");
        addOption(ciudadSelect, "Barbosa", "Barbosa");
        addOption(ciudadSelect, "Bello", "Bello");
        addOption(ciudadSelect, "Belmira", "Belmira");
        addOption(ciudadSelect, "Betania", "Betania");
        addOption(ciudadSelect, "Betulia", "Betulia");
        addOption(ciudadSelect, "Briceño", "Briceño");
        addOption(ciudadSelect, "Buriticá", "Buriticá");
        addOption(ciudadSelect, "Cáceres", "Cáceres");
        addOption(ciudadSelect, "Caicedo", "Caicedo");
        addOption(ciudadSelect, "Caldas", "Caldas");
        addOption(ciudadSelect, "Campamento", "Campamento");
        addOption(ciudadSelect, "Cañasgordas", "Cañasgordas");
        addOption(ciudadSelect, "Caracolí", "Caracolí");
        addOption(ciudadSelect, "Caramanta", "Caramanta");
        addOption(ciudadSelect, "Carepa", "Carepa");
        addOption(ciudadSelect, "Carolina del Príncipe", "Carolina del Príncipe");
        addOption(ciudadSelect, "Caucasia", "Caucasia");
        addOption(ciudadSelect, "Chigorodó", "Chigorodó");
        addOption(ciudadSelect, "Cisneros", "Cisneros");
        addOption(ciudadSelect, "Ciudad Bolívar", "Ciudad Bolívar");
        addOption(ciudadSelect, "Cocorná", "Cocorná");
        addOption(ciudadSelect, "Concepción", "Concepción");
        addOption(ciudadSelect, "Concordia", "Concordia");
        addOption(ciudadSelect, "Copacabana", "Copacabana");
        addOption(ciudadSelect, "Dabeiba", "Dabeiba");
        addOption(ciudadSelect, "Don Matías", "Don Matías");
        addOption(ciudadSelect, "Ebéjico", "Ebéjico");
        addOption(ciudadSelect, "El Bagre", "El Bagre");
        addOption(ciudadSelect, "El Carmen de Viboral", "El Carmen de Viboral");
        addOption(ciudadSelect, "El Peñol", "El Peñol");
        addOption(ciudadSelect, "El Retiro", "El Retiro");
        addOption(ciudadSelect, "El Santuario", "El Santuario");
        addOption(ciudadSelect, "Entrerríos", "Entrerríos");
        addOption(ciudadSelect, "Envigado", "Envigado");
        addOption(ciudadSelect, "Fredonia", "Fredonia");
        addOption(ciudadSelect, "Frontino", "Frontino");
        addOption(ciudadSelect, "Giraldo", "Giraldo");
        addOption(ciudadSelect, "Girardota", "Girardota");
        addOption(ciudadSelect, "Gómez Plata", "Gómez Plata");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Guarne", "Guarne");
        addOption(ciudadSelect, "Guatapé", "Guatapé");
        addOption(ciudadSelect, "Heliconia", "Heliconia");
        addOption(ciudadSelect, "Hispania", "Hispania");
        addOption(ciudadSelect, "Itagüí", "Itagüí");
        addOption(ciudadSelect, "Ituango", "Ituango");
        addOption(ciudadSelect, "Jardín", "Jardín");
        addOption(ciudadSelect, "Jericó", "Jericó");
        addOption(ciudadSelect, "La Ceja", "La Ceja");
        addOption(ciudadSelect, "La Estrella", "La Estrella");
        addOption(ciudadSelect, "La Pintada", "La Pintada");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Liborina", "Liborina");
        addOption(ciudadSelect, "Maceo", "Maceo");
        addOption(ciudadSelect, "Marinilla", "Marinilla");
        addOption(ciudadSelect, "Medellin", "Medellín");
        addOption(ciudadSelect, "Montebello", "Montebello");
        addOption(ciudadSelect, "Murindó", "Murindó");
        addOption(ciudadSelect, "Mutatá", "Mutatá");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Necoclí", "Necoclí");
        addOption(ciudadSelect, "Nechí", "Nechí");
        addOption(ciudadSelect, "Olaya", "Olaya");
        addOption(ciudadSelect, "Peque", "Peque");
        addOption(ciudadSelect, "Pueblorrico", "Pueblorrico");
        addOption(ciudadSelect, "Puerto Berrío", "Puerto Berrío");
        addOption(ciudadSelect, "Puerto Nare", "Puerto Nare");
        addOption(ciudadSelect, "Puerto Triunfo", "Puerto Triunfo");
        addOption(ciudadSelect, "Remedios", "Remedios");
        addOption(ciudadSelect, "Retiro", "Retiro");
        addOption(ciudadSelect, "Rionegro", "Rionegro");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "Sabaneta", "Sabaneta");
        addOption(ciudadSelect, "Salgar", "Salgar");
        addOption(ciudadSelect, "San Andrés de Cuerquía", "San Andrés de Cuerquía");
        addOption(ciudadSelect, "San Carlos", "San Carlos");
        addOption(ciudadSelect, "San Francisco", "San Francisco");
        addOption(ciudadSelect, "San Jerónimo", "San Jerónimo");
        addOption(ciudadSelect, "San José de la Montaña", "San José de la Montaña");
        addOption(ciudadSelect, "San Juan de Urabá", "San Juan de Urabá");
        addOption(ciudadSelect, "San Luis", "San Luis");
        addOption(ciudadSelect, "San Pedro de los Milagros", "San Pedro de los Milagros");
        addOption(ciudadSelect, "San Pedro de Urabá", "San Pedro de Urabá");
        addOption(ciudadSelect, "San Rafael", "San Rafael");
        addOption(ciudadSelect, "San Roque", "San Roque");
        addOption(ciudadSelect, "San Vicente", "San Vicente");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santa Fe de Antioquia", "Santa Fe de Antioquia");
        addOption(ciudadSelect, "Santa Rosa de Osos", "Santa Rosa de Osos");
        addOption(ciudadSelect, "Santo Domingo", "Santo Domingo");
        addOption(ciudadSelect, "Segovia", "Segovia");
        addOption(ciudadSelect, "Sonsón", "Sonsón");
        addOption(ciudadSelect, "Sopetrán", "Sopetrán");
        addOption(ciudadSelect, "Támesis", "Támesis");
        addOption(ciudadSelect, "Tarazá", "Tarazá");
        addOption(ciudadSelect, "Tarso", "Tarso");
        addOption(ciudadSelect, "Titiribí", "Titiribí");
        addOption(ciudadSelect, "Toledo", "Toledo");
        addOption(ciudadSelect, "Turbo", "Turbo");
        addOption(ciudadSelect, "Uramita", "Uramita");
        addOption(ciudadSelect, "Urrao", "Urrao");
        addOption(ciudadSelect, "Valdivia", "Valdivia");
        addOption(ciudadSelect, "Valparaíso", "Valparaíso");
        addOption(ciudadSelect, "Vegachí", "Vegachí");
        addOption(ciudadSelect, "Venecia", "Venecia");
        addOption(ciudadSelect, "Vigía del Fuerte", "Vigía del Fuerte");
        addOption(ciudadSelect, "Yalí", "Yalí");
        addOption(ciudadSelect, "Yarumal", "Yarumal");
        addOption(ciudadSelect, "Yolombó", "Yolombó");
        addOption(ciudadSelect, "Yondó", "Yondó");
        addOption(ciudadSelect, "Zaragoza", "Zaragoza");
        // Agrega más opciones de ciudad aquí
    }
       else if (departamento === "Arauca") {
        addOption(ciudadSelect, "Arauca", "Arauca");
        addOption(ciudadSelect, "Arauquita", "Arauquita");
        addOption(ciudadSelect, "Cravo Norte", "Cravo Norte");
        addOption(ciudadSelect, "Fortul", "Fortul");
        addOption(ciudadSelect, "Puerto Rondón", "Puerto Rondón");
        addOption(ciudadSelect, "Saravena", "Saravena");
        addOption(ciudadSelect, "Tame", "Tame");
        // Agrega más opciones de ciudad aquí
    }
    else if (departamento === "Atlántico") {
        addOption(ciudadSelect, "Barranquilla", "Barranquilla");
        addOption(ciudadSelect, "Baranoa", "Baranoa");
        addOption(ciudadSelect, "Campo de la Cruz", "Campo de la Cruz");
        addOption(ciudadSelect, "Candelaria", "Candelaria");
        addOption(ciudadSelect, "Galapa", "Galapa");
        addOption(ciudadSelect, "Juan de Acosta", "Juan de Acosta");
        addOption(ciudadSelect, "Luruaco", "Luruaco");
        addOption(ciudadSelect, "Malambo", "Malambo");
        addOption(ciudadSelect, "Manatí", "Manatí");
        addOption(ciudadSelect, "Palmar de Varela", "Palmar de Varela");
        addOption(ciudadSelect, "Piojó", "Piojó");
        addOption(ciudadSelect, "Polonuevo", "Polonuevo");
        addOption(ciudadSelect, "Ponedera", "Ponedera");
        addOption(ciudadSelect, "Puerto Colombia", "Puerto Colombia");
        addOption(ciudadSelect, "Repelón", "Repelón");
        addOption(ciudadSelect, "Sabanagrande", "Sabanagrande");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "Santa Lucía", "Santa Lucía");
        addOption(ciudadSelect, "Santo Tomás", "Santo Tomás");
        addOption(ciudadSelect, "Soledad", "Soledad");
        addOption(ciudadSelect, "Suan", "Suan");
        addOption(ciudadSelect, "Tubará", "Tubará");
        addOption(ciudadSelect, "Usiacurí", "Usiacurí");
       // Agrega más opciones de ciudad aquí
    }
    else if (departamento === "Bolívar") {
        addOption(ciudadSelect, "Cartagena de Indias", "Cartagena de Indias");
        addOption(ciudadSelect, "Achí", "Achí");
        addOption(ciudadSelect, "Altos del Rosario", "Altos del Rosario");
        addOption(ciudadSelect, "Arenal", "Arenal");
        addOption(ciudadSelect, "Arjona", "Arjona");
        addOption(ciudadSelect, "Arroyohondo", "Arroyohondo");
        addOption(ciudadSelect, "Barranco de Loba", "Barranco de Loba");
        addOption(ciudadSelect, "Calamar", "Calamar");
        addOption(ciudadSelect, "Cantagallo", "Cantagallo");
        addOption(ciudadSelect, "Cicuco", "Cicuco");
        addOption(ciudadSelect, "Córdoba", "Córdoba");
        addOption(ciudadSelect, "Clemencia", "Clemencia");
        addOption(ciudadSelect, "El Carmen de Bolívar", "El Carmen de Bolívar");
        addOption(ciudadSelect, "El Guamo", "El Guamo");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "Hatillo de Loba", "Hatillo de Loba");
        addOption(ciudadSelect, "Magangué", "Magangué");
        addOption(ciudadSelect, "Mahates", "Mahates");
        addOption(ciudadSelect, "Margarita", "Margarita");
        addOption(ciudadSelect, "María la Baja", "María la Baja");
        addOption(ciudadSelect, "Montecristo", "Montecristo");
        addOption(ciudadSelect, "Mompós", "Mompós");
        addOption(ciudadSelect, "Morales", "Morales");
        addOption(ciudadSelect, "Norosí", "Norosí");
        addOption(ciudadSelect, "Pinillos", "Pinillos");
        addOption(ciudadSelect, "Regidor", "Regidor");
        addOption(ciudadSelect, "Río Viejo", "Río Viejo");
        addOption(ciudadSelect, "San Cristóbal", "San Cristóbal");
        addOption(ciudadSelect, "San Estanislao", "San Estanislao");
        addOption(ciudadSelect, "San Fernando", "San Fernando");
        addOption(ciudadSelect, "San Jacinto", "San Jacinto");
        addOption(ciudadSelect, "San Jacinto del Cauca", "San Jacinto del Cauca");
        addOption(ciudadSelect, "San Juan Nepomuceno", "San Juan Nepomuceno");
        addOption(ciudadSelect, "San Martín de Loba", "San Martín de Loba");
        addOption(ciudadSelect, "San Pablo", "San Pablo");
        addOption(ciudadSelect, "Santa Catalina", "Santa Catalina");
        addOption(ciudadSelect, "Santa Rosa", "Santa Rosa");
        addOption(ciudadSelect, "Santa Rosa del Sur", "Santa Rosa del Sur");
        addOption(ciudadSelect, "Simití", "Simití");
        addOption(ciudadSelect, "Soplaviento", "Soplaviento");
        addOption(ciudadSelect, "Talaigua Nuevo", "Talaigua Nuevo");
        addOption(ciudadSelect, "Tiquisio", "Tiquisio");
        addOption(ciudadSelect, "Turbaco", "Turbaco");
        addOption(ciudadSelect, "Turbaná", "Turbaná");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        addOption(ciudadSelect, "Zambrano", "Zambrano");
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Boyacá") {
        addOption(ciudadSelect, "Tunja", "Tunja");
        addOption(ciudadSelect, "Almeida", "Almeida");
        addOption(ciudadSelect, "Aquitania", "Aquitania");
        addOption(ciudadSelect, "Arcabuco", "Arcabuco");
        addOption(ciudadSelect, "Belén", "Belén");
        addOption(ciudadSelect, "Berbeo", "Berbeo");
        addOption(ciudadSelect, "Betéitiva", "Betéitiva");
        addOption(ciudadSelect, "Boavita", "Boavita");
        addOption(ciudadSelect, "Boyacá", "Boyacá");
        addOption(ciudadSelect, "Briceño", "Briceño");
        addOption(ciudadSelect, "Buena Vista", "Buena Vista");
        addOption(ciudadSelect, "Busbanzá", "Busbanzá");
        addOption(ciudadSelect, "Caldas", "Caldas");
        addOption(ciudadSelect, "Campohermoso", "Campohermoso");
        addOption(ciudadSelect, "Cerinza", "Cerinza");
        addOption(ciudadSelect, "Chinavita", "Chinavita");
        addOption(ciudadSelect, "Chiquinquirá", "Chiquinquirá");
        addOption(ciudadSelect, "Chiscas", "Chiscas");
        addOption(ciudadSelect, "Chita", "Chita");
        addOption(ciudadSelect, "Chitaraque", "Chitaraque");
        addOption(ciudadSelect, "Chivatá", "Chivatá");
        addOption(ciudadSelect, "Chivor", "Chivor");
        addOption(ciudadSelect, "Ciénega", "Ciénega");
        addOption(ciudadSelect, "Cómbita", "Cómbita");
        addOption(ciudadSelect, "Coper", "Coper");
        addOption(ciudadSelect, "Corrales", "Corrales");
        addOption(ciudadSelect, "Covarachía", "Covarachía");
        addOption(ciudadSelect, "Cubará", "Cubará");
        addOption(ciudadSelect, "Cucaita", "Cucaita");
        addOption(ciudadSelect, "Cuítiva", "Cuítiva");
        addOption(ciudadSelect, "Duitama", "Duitama");
        addOption(ciudadSelect, "El Cocuy", "El Cocuy");
        addOption(ciudadSelect, "El Espino", "El Espino");
        addOption(ciudadSelect, "Firavitoba", "Firavitoba");
        addOption(ciudadSelect, "Floresta", "Floresta");
        addOption(ciudadSelect, "Gachantivá", "Gachantivá");
        addOption(ciudadSelect, "Gameza", "Gameza");
        addOption(ciudadSelect, "Garagoa", "Garagoa");
        addOption(ciudadSelect, "Guacamayas", "Guacamayas");
        addOption(ciudadSelect, "Guateque", "Guateque");
        addOption(ciudadSelect, "Guayatá", "Guayatá");
        addOption(ciudadSelect, "Güicán", "Güicán");
        addOption(ciudadSelect, "Iza", "Iza");
        addOption(ciudadSelect, "Jenesano", "Jenesano");
        addOption(ciudadSelect, "Jericó", "Jericó");
        addOption(ciudadSelect, "La Capilla", "La Capilla");
        addOption(ciudadSelect, "La Uvita", "La Uvita");
        addOption(ciudadSelect, "La Victoria", "La Victoria");
        addOption(ciudadSelect, "Labranzagrande", "Labranzagrande");
        addOption(ciudadSelect, "Macanal", "Macanal");
        addOption(ciudadSelect, "Maripí", "Maripí");
        addOption(ciudadSelect, "Miraflores", "Miraflores");
        addOption(ciudadSelect, "Mongua", "Mongua");
        addOption(ciudadSelect, "Monguí", "Monguí");
        addOption(ciudadSelect, "Moniquirá", "Moniquirá");
        addOption(ciudadSelect, "Motavita", "Motavita");
        addOption(ciudadSelect, "Muzo", "Muzo");
        addOption(ciudadSelect, "Nobsa", "Nobsa");
        addOption(ciudadSelect, "Nuevo Colón", "Nuevo Colón");
        addOption(ciudadSelect, "Oicatá", "Oicatá");
        addOption(ciudadSelect, "Otanche", "Otanche");
        addOption(ciudadSelect, "Pachavita", "Pachavita");
        addOption(ciudadSelect, "Páez", "Páez");
        addOption(ciudadSelect, "Paipa", "Paipa");
        addOption(ciudadSelect, "Pajarito", "Pajarito");
        addOption(ciudadSelect, "Panqueba", "Panqueba");
        addOption(ciudadSelect, "Pauna", "Pauna");
        addOption(ciudadSelect, "Paya", "Paya");
        addOption(ciudadSelect, "Paz de Río", "Paz de Río");
        addOption(ciudadSelect, "Pesca", "Pesca");
        addOption(ciudadSelect, "Pisba", "Pisba");
        addOption(ciudadSelect, "Puerto Boyacá", "Puerto Boyacá");
        addOption(ciudadSelect, "Quípama", "Quípama");
        addOption(ciudadSelect, "Ramiriquí", "Ramiriquí");
        addOption(ciudadSelect, "Ráquira", "Ráquira");
        addOption(ciudadSelect, "Rondón", "Rondón");
        addOption(ciudadSelect, "Saboyá", "Saboyá");
        addOption(ciudadSelect, "Sáchica", "Sáchica");
        addOption(ciudadSelect, "Samacá", "Samacá");
        addOption(ciudadSelect, "San Eduardo", "San Eduardo");
        addOption(ciudadSelect, "San José de Pare", "San José de Pare");
        addOption(ciudadSelect, "San Luis de Gaceno", "San Luis de Gaceno");
        addOption(ciudadSelect, "San Mateo", "San Mateo");
        addOption(ciudadSelect, "San Miguel de Sema", "San Miguel de Sema");
        addOption(ciudadSelect, "San Pablo de Borbur", "San Pablo de Borbur");
        addOption(ciudadSelect, "Santa María", "Santa María");
        addOption(ciudadSelect, "Santa Rosa de Viterbo", "Santa Rosa de Viterbo");
        addOption(ciudadSelect, "Santa Sofía", "Santa Sofía");
        addOption(ciudadSelect, "Santana", "Santana");
        addOption(ciudadSelect, "Sativanorte", "Sativanorte");
        addOption(ciudadSelect, "Sativasur", "Sativasur");
        addOption(ciudadSelect, "Siachoque", "Siachoque");
        addOption(ciudadSelect, "Soatá", "Soatá");
        addOption(ciudadSelect, "Socotá", "Socotá");
        addOption(ciudadSelect, "Socha", "Socha");
        addOption(ciudadSelect, "Sogamoso", "Sogamoso");
        addOption(ciudadSelect, "Somondoco", "Somondoco");
        addOption(ciudadSelect, "Sora", "Sora");
        addOption(ciudadSelect, "Soracá", "Soracá");
        addOption(ciudadSelect, "Sotaquirá", "Sotaquirá");
        addOption(ciudadSelect, "Susacón", "Susacón");
        addOption(ciudadSelect, "Sutamarchán", "Sutamarchán");
        addOption(ciudadSelect, "Sutatenza", "Sutatenza");
        addOption(ciudadSelect, "Tasco", "Tasco");
        addOption(ciudadSelect, "Tenza", "Tenza");
        addOption(ciudadSelect, "Tibaná", "Tibaná");
        addOption(ciudadSelect, "Tibasosa", "Tibasosa");
        addOption(ciudadSelect, "Tinjacá", "Tinjacá");
        addOption(ciudadSelect, "Tipacoque", "Tipacoque");
        addOption(ciudadSelect, "Toca", "Toca");
        addOption(ciudadSelect, "Togüí", "Togüí");
        addOption(ciudadSelect, "Topagá", "Topagá");
        addOption(ciudadSelect, "Tota", "Tota");
        addOption(ciudadSelect, "Tununguá", "Tununguá");
        addOption(ciudadSelect, "Turmequé", "Turmequé");
        addOption(ciudadSelect, "Tuta", "Tuta");
        addOption(ciudadSelect, "Tutazá", "Tutazá");
        addOption(ciudadSelect, "Umbita", "Umbita");
        addOption(ciudadSelect, "Ventaquemada", "Ventaquemada");
        addOption(ciudadSelect, "Viracachá", "Viracachá");
        addOption(ciudadSelect, "Zetaquirá", "Zetaquirá");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Caldas") {
        addOption(ciudadSelect, "Manizales", "Manizales");
        addOption(ciudadSelect, "Aguadas", "Aguadas");
        addOption(ciudadSelect, "Anserma", "Anserma");
        addOption(ciudadSelect, "Aranzazu", "Aranzazu");
        addOption(ciudadSelect, "Belalcázar", "Belalcázar");
        addOption(ciudadSelect, "Chinchiná", "Chinchiná");
        addOption(ciudadSelect, "Filadelfia", "Filadelfia");
        addOption(ciudadSelect, "La Dorada", "La Dorada");
        addOption(ciudadSelect, "La Merced", "La Merced");
        addOption(ciudadSelect, "Manzanares", "Manzanares");
        addOption(ciudadSelect, "Marmato", "Marmato");
        addOption(ciudadSelect, "Marquetalia", "Marquetalia");
        addOption(ciudadSelect, "Marulanda", "Marulanda");
        addOption(ciudadSelect, "Neira", "Neira");
        addOption(ciudadSelect, "Norcasia", "Norcasia");
        addOption(ciudadSelect, "Pácora", "Pácora");
        addOption(ciudadSelect, "Palestina", "Palestina");
        addOption(ciudadSelect, "Pensilvania", "Pensilvania");
        addOption(ciudadSelect, "Riosucio", "Riosucio");
        addOption(ciudadSelect, "Risaralda", "Risaralda");
        addOption(ciudadSelect, "Salamina", "Salamina");
        addOption(ciudadSelect, "Samaná", "Samaná");
        addOption(ciudadSelect, "San José", "San José");
        addOption(ciudadSelect, "Supía", "Supía");
        addOption(ciudadSelect, "Victoria", "Victoria");
        addOption(ciudadSelect, "Villamaría", "Villamaría");
        addOption(ciudadSelect, "Viterbo", "Viterbo");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Caquetá") {
        addOption(ciudadSelect, "Florencia", "Florencia");
        addOption(ciudadSelect, "Albania", "Albania");
        addOption(ciudadSelect, "Belén de los Andaquíes", "Belén de los Andaquíes");
        addOption(ciudadSelect, "Cartagena del Chairá", "Cartagena del Chairá");
        addOption(ciudadSelect, "Curillo", "Curillo");
        addOption(ciudadSelect, "El Doncello", "El Doncello");
        addOption(ciudadSelect, "El Paujil", "El Paujil");
        addOption(ciudadSelect, "La Montañita", "La Montañita");
        addOption(ciudadSelect, "Milán", "Milán");
        addOption(ciudadSelect, "Morelia", "Morelia");
        addOption(ciudadSelect, "Puerto Rico", "Puerto Rico");
        addOption(ciudadSelect, "San José del Fragua", "San José del Fragua");
        addOption(ciudadSelect, "San Vicente del Caguán", "San Vicente del Caguán");
        addOption(ciudadSelect, "Solano", "Solano");
        addOption(ciudadSelect, "Solita", "Solita");
        addOption(ciudadSelect, "Valparaíso", "Valparaíso");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Casanare") {
        addOption(ciudadSelect, "Yopal", "Yopal");
        addOption(ciudadSelect, "Aguazul", "Aguazul");
        addOption(ciudadSelect, "Chámeza", "Chámeza");
        addOption(ciudadSelect, "Hato Corozal", "Hato Corozal");
        addOption(ciudadSelect, "La Salina", "La Salina");
        addOption(ciudadSelect, "Maní", "Maní");
        addOption(ciudadSelect, "Monterrey", "Monterrey");
        addOption(ciudadSelect, "Nunchía", "Nunchía");
        addOption(ciudadSelect, "Orocué", "Orocué");
        addOption(ciudadSelect, "Paz de Ariporo", "Paz de Ariporo");
        addOption(ciudadSelect, "Pore", "Pore");
        addOption(ciudadSelect, "Recetor", "Recetor");
        addOption(ciudadSelect, "Sabanalarga", "Sabanalarga");
        addOption(ciudadSelect, "San Luis de Palenque", "San Luis de Palenque");
        addOption(ciudadSelect, "Támara", "Támara");
        addOption(ciudadSelect, "Tauramena", "Tauramena");
        addOption(ciudadSelect, "Trinidad", "Trinidad");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cauca") {
        addOption(ciudadSelect, "Popayán", "Popayán");
        addOption(ciudadSelect, "Almaguer", "Almaguer");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Balboa", "Balboa");
        addOption(ciudadSelect, "Bolívar", "Bolívar");
        addOption(ciudadSelect, "Buenos Aires", "Buenos Aires");
        addOption(ciudadSelect, "Cajibío", "Cajibío");
        addOption(ciudadSelect, "Caldono", "Caldono");
        addOption(ciudadSelect, "Caloto", "Caloto");
        addOption(ciudadSelect, "Corinto", "Corinto");
        addOption(ciudadSelect, "El Tambo", "El Tambo");
        addOption(ciudadSelect, "Florencia", "Florencia");
        addOption(ciudadSelect, "Guachene", "Guachene");
        addOption(ciudadSelect, "Guapi", "Guapi");
        addOption(ciudadSelect, "Inzá", "Inzá");
        addOption(ciudadSelect, "Jambaló", "Jambaló");
        addOption(ciudadSelect, "La Sierra", "La Sierra");
        addOption(ciudadSelect, "La Vega", "La Vega");
        addOption(ciudadSelect, "López de Micay", "López de Micay");
        addOption(ciudadSelect, "Mercaderes", "Mercaderes");
        addOption(ciudadSelect, "Miranda", "Miranda");
        addOption(ciudadSelect, "Morales", "Morales");
        addOption(ciudadSelect, "Padilla", "Padilla");
        addOption(ciudadSelect, "Páez", "Páez");
        addOption(ciudadSelect, "Patía", "Patía");
        addOption(ciudadSelect, "Piamonte", "Piamonte");
        addOption(ciudadSelect, "Piendamó", "Piendamó");
        addOption(ciudadSelect, "Puerto Tejada", "Puerto Tejada");
        addOption(ciudadSelect, "Puracé", "Puracé");
        addOption(ciudadSelect, "Rosas", "Rosas");
        addOption(ciudadSelect, "San Sebastián", "San Sebastián");
        addOption(ciudadSelect, "Santander de Quilichao", "Santander de Quilichao");
        addOption(ciudadSelect, "Santa Rosa", "Santa Rosa");
        addOption(ciudadSelect, "Silvia", "Silvia");
        addOption(ciudadSelect, "Sotará", "Sotará");
        addOption(ciudadSelect, "Suárez", "Suárez");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Timbío", "Timbío");
        addOption(ciudadSelect, "Timbiquí", "Timbiquí");
        addOption(ciudadSelect, "Toribío", "Toribío");
        addOption(ciudadSelect, "Totoró", "Totoró");
        addOption(ciudadSelect, "Villa Rica", "Villa Rica");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cesar") {
        addOption(ciudadSelect, "Valledupar", "Valledupar");
        addOption(ciudadSelect, "Aguachica", "Aguachica");
        addOption(ciudadSelect, "Agustín Codazzi", "Agustín Codazzi");
        addOption(ciudadSelect, "Astrea", "Astrea");
        addOption(ciudadSelect, "Becerril", "Becerril");
        addOption(ciudadSelect, "Bosconia", "Bosconia");
        addOption(ciudadSelect, "Chimichagua", "Chimichagua");
        addOption(ciudadSelect, "Chiriguaná", "Chiriguaná");
        addOption(ciudadSelect, "Curumaní", "Curumaní");
        addOption(ciudadSelect, "El Copey", "El Copey");
        addOption(ciudadSelect, "El Paso", "El Paso");
        addOption(ciudadSelect, "Gamarra", "Gamarra");
        addOption(ciudadSelect, "González", "González");
        addOption(ciudadSelect, "La Gloria", "La Gloria");
        addOption(ciudadSelect, "La Jagua de Ibirico", "La Jagua de Ibirico");
        addOption(ciudadSelect, "La Paz", "La Paz");
        addOption(ciudadSelect, "Manaure Balcón del Cesar", "Manaure Balcón del Cesar");
        addOption(ciudadSelect, "Pailitas", "Pailitas");
        addOption(ciudadSelect, "Pelaya", "Pelaya");
        addOption(ciudadSelect, "Pueblo Bello", "Pueblo Bello");
        addOption(ciudadSelect, "Río de Oro", "Río de Oro");
        addOption(ciudadSelect, "San Alberto", "San Alberto");
        addOption(ciudadSelect, "San Diego", "San Diego");
        addOption(ciudadSelect, "San Martín", "San Martín");
        addOption(ciudadSelect, "Tamalameque", "Tamalameque");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Chocó") {
        addOption(ciudadSelect, "Quibdó", "Quibdó");
        addOption(ciudadSelect, "Acandí", "Acandí");
        addOption(ciudadSelect, "Alto Baudó", "Alto Baudó");
        addOption(ciudadSelect, "Bagadó", "Bagadó");
        addOption(ciudadSelect, "Bahía Solano", "Bahía Solano");
        addOption(ciudadSelect, "Bajo Baudó", "Bajo Baudó");
        addOption(ciudadSelect, "Bojayá", "Bojayá");
        addOption(ciudadSelect, "Cértegui", "Cértegui");
        addOption(ciudadSelect, "Condoto", "Condoto");
        addOption(ciudadSelect, "El Cantón del San Pablo", "El Cantón del San Pablo");
        addOption(ciudadSelect, "El Carmen de Atrato", "El Carmen de Atrato");
        addOption(ciudadSelect, "El Litoral del San Juan", "El Litoral del San Juan");
        addOption(ciudadSelect, "Istmina", "Istmina");
        addOption(ciudadSelect, "Juradó", "Juradó");
        addOption(ciudadSelect, "Lloró", "Lloró");
        addOption(ciudadSelect, "Medio Atrato", "Medio Atrato");
        addOption(ciudadSelect, "Medio Baudó", "Medio Baudó");
        addOption(ciudadSelect, "Medio San Juan", "Medio San Juan");
        addOption(ciudadSelect, "Nóvita", "Nóvita");
        addOption(ciudadSelect, "Nuquí", "Nuquí");
        addOption(ciudadSelect, "Río Iró", "Río Iró");
        addOption(ciudadSelect, "Río Quito", "Río Quito");
        addOption(ciudadSelect, "Riosucio", "Riosucio");
        addOption(ciudadSelect, "San José del Palmar", "San José del Palmar");
        addOption(ciudadSelect, "Sipí", "Sipí");
        addOption(ciudadSelect, "Tadó", "Tadó");
        addOption(ciudadSelect, "Unguía", "Unguía");
        addOption(ciudadSelect, "Unión Panamericana", "Unión Panamericana");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Córdoba") {
        addOption(ciudadSelect, "Montería", "Montería");
        addOption(ciudadSelect, "Ayapel", "Ayapel");
        addOption(ciudadSelect, "Buenavista", "Buenavista");
        addOption(ciudadSelect, "Canalete", "Canalete");
        addOption(ciudadSelect, "Cereté", "Cereté");
        addOption(ciudadSelect, "Chimá", "Chimá");
        addOption(ciudadSelect, "Chinú", "Chinú");
        addOption(ciudadSelect, "Ciénaga de Oro", "Ciénaga de Oro");
        addOption(ciudadSelect, "Cotorra", "Cotorra");
        addOption(ciudadSelect, "La Apartada", "La Apartada");
        addOption(ciudadSelect, "Lorica", "Lorica");
        addOption(ciudadSelect, "Los Córdobas", "Los Córdobas");
        addOption(ciudadSelect, "Momil", "Momil");
        addOption(ciudadSelect, "Montelíbano", "Montelíbano");
        addOption(ciudadSelect, "Moñitos", "Moñitos");
        addOption(ciudadSelect, "Planeta Rica", "Planeta Rica");
        addOption(ciudadSelect, "Pueblo Nuevo", "Pueblo Nuevo");
        addOption(ciudadSelect, "Puerto Escondido", "Puerto Escondido");
        addOption(ciudadSelect, "Puerto Libertador", "Puerto Libertador");
        addOption(ciudadSelect, "Purísima", "Purísima");
        addOption(ciudadSelect, "Sahagún", "Sahagún");
        addOption(ciudadSelect, "San Andrés de Sotavento", "San Andrés de Sotavento");
        addOption(ciudadSelect, "San Antero", "San Antero");
        addOption(ciudadSelect, "San Bernardo del Viento", "San Bernardo del Viento");
        addOption(ciudadSelect, "San Carlos", "San Carlos");
        addOption(ciudadSelect, "San José de Uré", "San José de Uré");
        addOption(ciudadSelect, "San Pelayo", "San Pelayo");
        addOption(ciudadSelect, "Tierralta", "Tierralta");
        addOption(ciudadSelect, "Tuchín", "Tuchín");
        addOption(ciudadSelect, "Valencia", "Valencia");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Cundinamarca") {
        addOption(ciudadSelect, "Bogotá, D.C.", "Bogotá, D.C.");
        addOption(ciudadSelect, "Agua de Dios", "Agua de Dios");
        addOption(ciudadSelect, "Albán", "Albán");
        addOption(ciudadSelect, "Anapoima", "Anapoima");
        addOption(ciudadSelect, "Anolaima", "Anolaima");
        addOption(ciudadSelect, "Apulo", "Apulo");
        addOption(ciudadSelect, "Arbeláez", "Arbeláez");
        addOption(ciudadSelect, "Beltrán", "Beltrán");
        addOption(ciudadSelect, "Bituima", "Bituima");
        addOption(ciudadSelect, "Bojacá", "Bojacá");
        addOption(ciudadSelect, "Cabrera", "Cabrera");
        addOption(ciudadSelect, "Cachipay", "Cachipay");
        addOption(ciudadSelect, "Cajicá", "Cajicá");
        addOption(ciudadSelect, "Caparrapí", "Caparrapí");
        addOption(ciudadSelect, "Cáqueza", "Cáqueza");
        addOption(ciudadSelect, "Carmen de Carupa", "Carmen de Carupa");
        addOption(ciudadSelect, "Chaguaní", "Chaguaní");
        addOption(ciudadSelect, "Chía", "Chía");
        addOption(ciudadSelect, "Chipaque", "Chipaque");
        addOption(ciudadSelect, "Choachí", "Choachí");
        addOption(ciudadSelect, "Chocontá", "Chocontá");
        addOption(ciudadSelect, "Cogua", "Cogua");
        addOption(ciudadSelect, "Cota", "Cota");
        addOption(ciudadSelect, "Cucunubá", "Cucunubá");
        addOption(ciudadSelect, "El Colegio", "El Colegio");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "El Rosal", "El Rosal");
        addOption(ciudadSelect, "Facatativá", "Facatativá");
        addOption(ciudadSelect, "Fómeque", "Fómeque");
        addOption(ciudadSelect, "Fosca", "Fosca");
        addOption(ciudadSelect, "Funza", "Funza");
        addOption(ciudadSelect, "Fúquene", "Fúquene");
        addOption(ciudadSelect, "Fusagasugá", "Fusagasugá");
        addOption(ciudadSelect, "Gachalá", "Gachalá");
        addOption(ciudadSelect, "Gachancipá", "Gachancipá");
        addOption(ciudadSelect, "Gachetá", "Gachetá");
        addOption(ciudadSelect, "Gama", "Gama");
        addOption(ciudadSelect, "Girardot", "Girardot");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guachetá", "Guachetá");
        addOption(ciudadSelect, "Guaduas", "Guaduas");
        addOption(ciudadSelect, "Guasca", "Guasca");
        addOption(ciudadSelect, "Guataquí", "Guataquí");
        addOption(ciudadSelect, "Guatavita", "Guatavita");
        addOption(ciudadSelect, "Guayabal de Síquima", "Guayabal de Síquima");
        addOption(ciudadSelect, "Guayabetal", "Guayabetal");
        addOption(ciudadSelect, "Gutiérrez", "Gutiérrez");
        addOption(ciudadSelect, "Jerusalén", "Jerusalén");
        addOption(ciudadSelect, "Junín", "Junín");
        addOption(ciudadSelect, "La Calera", "La Calera");
        addOption(ciudadSelect, "La Mesa", "La Mesa");
        addOption(ciudadSelect, "La Palma", "La Palma");
        addOption(ciudadSelect, "La Peña", "La Peña");
        addOption(ciudadSelect, "La Vega", "La Vega");
        addOption(ciudadSelect, "Lenguazaque", "Lenguazaque");
        addOption(ciudadSelect, "Machetá", "Machetá");
        addOption(ciudadSelect, "Madrid", "Madrid");
        addOption(ciudadSelect, "Manta", "Manta");
        addOption(ciudadSelect, "Medina", "Medina");
        addOption(ciudadSelect, "Mosquera", "Mosquera");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Nemocón", "Nemocón");
        addOption(ciudadSelect, "Nilo", "Nilo");
        addOption(ciudadSelect, "Nimaima", "Nimaima");
        addOption(ciudadSelect, "Nocaima", "Nocaima");
        addOption(ciudadSelect, "Venecia", "Venecia");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Guainía") {
        addOption(ciudadSelect, "Inírida", "Inírida");
        addOption(ciudadSelect, "Barranco Minas", "Barranco Minas");
        addOption(ciudadSelect, "Mapiripana", "Mapiripana");
        addOption(ciudadSelect, "Cacahual", "Cacahual");
        addOption(ciudadSelect, "San Felipe", "San Felipe");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Guaviare") {
        addOption(ciudadSelect, "San José del Guaviare", "San José del Guaviare");
        addOption(ciudadSelect, "Calamar", "Calamar");
        addOption(ciudadSelect, "El Retorno", "El Retorno");
        addOption(ciudadSelect, "Miraflores", "Miraflores");
        addOption(ciudadSelect, "El Dorado", "El Dorado");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Huila") {
        addOption(ciudadSelect, "Neiva", "Neiva");
        addOption(ciudadSelect, "Acevedo", "Acevedo");
        addOption(ciudadSelect, "Agrado", "Agrado");
        addOption(ciudadSelect, "Aipe", "Aipe");
        addOption(ciudadSelect, "Algeciras", "Algeciras");
        addOption(ciudadSelect, "Altamira", "Altamira");
        addOption(ciudadSelect, "Baraya", "Baraya");
        addOption(ciudadSelect, "Campoalegre", "Campoalegre");
        addOption(ciudadSelect, "Colombia", "Colombia");
        addOption(ciudadSelect, "Elías", "Elías");
        addOption(ciudadSelect, "Garzón", "Garzón");
        addOption(ciudadSelect, "Gigante", "Gigante");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Hobo", "Hobo");
        addOption(ciudadSelect, "Íquira", "Íquira");
        addOption(ciudadSelect, "Isnos", "Isnos");
        addOption(ciudadSelect, "La Argentina", "La Argentina");
        addOption(ciudadSelect, "La Plata", "La Plata");
        addOption(ciudadSelect, "Nátaga", "Nátaga");
        addOption(ciudadSelect, "Oporapa", "Oporapa");
        addOption(ciudadSelect, "Paicol", "Paicol");
        addOption(ciudadSelect, "Palermo", "Palermo");
        addOption(ciudadSelect, "Palestina", "Palestina");
        addOption(ciudadSelect, "Pital", "Pital");
        addOption(ciudadSelect, "Pitalito", "Pitalito");
        addOption(ciudadSelect, "Rivera", "Rivera");
        addOption(ciudadSelect, "Saladoblanco", "Saladoblanco");
        addOption(ciudadSelect, "San Agustín", "San Agustín");
        addOption(ciudadSelect, "Santa María", "Santa María");
        addOption(ciudadSelect, "Suaza", "Suaza");
        addOption(ciudadSelect, "Tarqui", "Tarqui");
        addOption(ciudadSelect, "Tello", "Tello");
        addOption(ciudadSelect, "Teruel", "Teruel");
        addOption(ciudadSelect, "Tesalia", "Tesalia");
        addOption(ciudadSelect, "Timaná", "Timaná");
        addOption(ciudadSelect, "Villavieja", "Villavieja");
        addOption(ciudadSelect, "Yaguará", "Yaguará");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "La Guajira") {
        addOption(ciudadSelect, "Riohacha", "Riohacha");
        addOption(ciudadSelect, "Albania", "Albania");
        addOption(ciudadSelect, "Barrancas", "Barrancas");
        addOption(ciudadSelect, "Dibulla", "Dibulla");
        addOption(ciudadSelect, "Distracción", "Distracción");
        addOption(ciudadSelect, "El Molino", "El Molino");
        addOption(ciudadSelect, "Fonseca", "Fonseca");
        addOption(ciudadSelect, "Hatonuevo", "Hatonuevo");
        addOption(ciudadSelect, "La Jagua del Pilar", "La Jagua del Pilar");
        addOption(ciudadSelect, "Maicao", "Maicao");
        addOption(ciudadSelect, "Manaure", "Manaure");
        addOption(ciudadSelect, "San Juan del Cesar", "San Juan del Cesar");
        addOption(ciudadSelect, "Uribia", "Uribia");
        addOption(ciudadSelect, "Urumita", "Urumita");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Magdalena") {
        addOption(ciudadSelect, "Santa Marta", "Santa Marta");
        addOption(ciudadSelect, "Algarrobo", "Algarrobo");
        addOption(ciudadSelect, "Aracataca", "Aracataca");
        addOption(ciudadSelect, "Ariguaní", "Ariguaní");
        addOption(ciudadSelect, "Cerro de San Antonio", "Cerro de San Antonio");
        addOption(ciudadSelect, "Chibolo", "Chibolo");
        addOption(ciudadSelect, "Ciénaga", "Ciénaga");
        addOption(ciudadSelect, "Concordia", "Concordia");
        addOption(ciudadSelect, "El Banco", "El Banco");
        addOption(ciudadSelect, "El Piñón", "El Piñón");
        addOption(ciudadSelect, "El Retén", "El Retén");
        addOption(ciudadSelect, "Fundación", "Fundación");
        addOption(ciudadSelect, "Guamal", "Guamal");
        addOption(ciudadSelect, "Nueva Granada", "Nueva Granada");
        addOption(ciudadSelect, "Pedraza", "Pedraza");
        addOption(ciudadSelect, "Pijiño del Carmen", "Pijiño del Carmen");
        addOption(ciudadSelect, "Pivijay", "Pivijay");
        addOption(ciudadSelect, "Plato", "Plato");
        addOption(ciudadSelect, "Puebloviejo", "Puebloviejo");
        addOption(ciudadSelect, "Remolino", "Remolino");
        addOption(ciudadSelect, "Sabanas de San Ángel", "Sabanas de San Ángel");
        addOption(ciudadSelect, "Salamina", "Salamina");
        addOption(ciudadSelect, "San Sebastián de Buenavista", "San Sebastián de Buenavista");
        addOption(ciudadSelect, "San Zenón", "San Zenón");
        addOption(ciudadSelect, "Santa Ana", "Santa Ana");
        addOption(ciudadSelect, "Santa Bárbara de Pinto", "Santa Bárbara de Pinto");
        addOption(ciudadSelect, "Sitionuevo", "Sitionuevo");
        addOption(ciudadSelect, "Tenerife", "Tenerife");
        addOption(ciudadSelect, "Zapayán", "Zapayán");
        addOption(ciudadSelect, "Zona Bananera", "Zona Bananera");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Meta") {
        addOption(ciudadSelect, "Villavicencio", "Villavicencio");
        addOption(ciudadSelect, "Acacías", "Acacías");
        addOption(ciudadSelect, "Barranca de Upía", "Barranca de Upía");
        addOption(ciudadSelect, "Cabuyaro", "Cabuyaro");
        addOption(ciudadSelect, "Castilla La Nueva", "Castilla La Nueva");
        addOption(ciudadSelect, "Cubarral", "Cubarral");
        addOption(ciudadSelect, "Cumaral", "Cumaral");
        addOption(ciudadSelect, "El Calvario", "El Calvario");
        addOption(ciudadSelect, "El Castillo", "El Castillo");
        addOption(ciudadSelect, "El Dorado", "El Dorado");
        addOption(ciudadSelect, "Fuente de Oro", "Fuente de Oro");
        addOption(ciudadSelect, "Granada", "Granada");
        addOption(ciudadSelect, "Guamal", "Guamal");
        addOption(ciudadSelect, "Mapiripán", "Mapiripán");
        addOption(ciudadSelect, "Mesetas", "Mesetas");
        addOption(ciudadSelect, "La Macarena", "La Macarena");
        addOption(ciudadSelect, "Lejanías", "Lejanías");
        addOption(ciudadSelect, "Puerto Concordia", "Puerto Concordia");
        addOption(ciudadSelect, "Puerto Gaitán", "Puerto Gaitán");
        addOption(ciudadSelect, "Puerto Lleras", "Puerto Lleras");
        addOption(ciudadSelect, "Puerto López", "Puerto López");
        addOption(ciudadSelect, "Puerto Rico", "Puerto Rico");
        addOption(ciudadSelect, "Restrepo", "Restrepo");
        addOption(ciudadSelect, "San Carlos de Guaroa", "San Carlos de Guaroa");
        addOption(ciudadSelect, "San Juan de Arama", "San Juan de Arama");
        addOption(ciudadSelect, "San Juanito", "San Juanito");
        addOption(ciudadSelect, "San Martín", "San Martín");
        addOption(ciudadSelect, "Uribe", "Uribe");
        addOption(ciudadSelect, "Vista Hermosa", "Vista Hermosa");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Nariño") {
        addOption(ciudadSelect, "Pasto", "Pasto");
        addOption(ciudadSelect, "Albán", "Albán");
        addOption(ciudadSelect, "Aldana", "Aldana");
        addOption(ciudadSelect, "Ancuyá", "Ancuyá");
        addOption(ciudadSelect, "Arboleda", "Arboleda");
        addOption(ciudadSelect, "Barbacoas", "Barbacoas");
        addOption(ciudadSelect, "Belén", "Belén");
        addOption(ciudadSelect, "Buesaco", "Buesaco");
        addOption(ciudadSelect, "Colón", "Colón");
        addOption(ciudadSelect, "Consacá", "Consacá");
        addOption(ciudadSelect, "Contadero", "Contadero");
        addOption(ciudadSelect, "Córdoba", "Córdoba");
        addOption(ciudadSelect, "Cuaspud", "Cuaspud");
        addOption(ciudadSelect, "Cumbal", "Cumbal");
        addOption(ciudadSelect, "Cumbitara", "Cumbitara");
        addOption(ciudadSelect, "El Charco", "El Charco");
        addOption(ciudadSelect, "El Peñol", "El Peñol");
        addOption(ciudadSelect, "El Rosario", "El Rosario");
        addOption(ciudadSelect, "El Tablón de Gómez", "El Tablón de Gómez");
        addOption(ciudadSelect, "El Tambo", "El Tambo");
        addOption(ciudadSelect, "Francisco Pizarro", "Francisco Pizarro");
        addOption(ciudadSelect, "Funes", "Funes");
        addOption(ciudadSelect, "Guachucal", "Guachucal");
        addOption(ciudadSelect, "Guaitarilla", "Guaitarilla");
        addOption(ciudadSelect, "Gualmatán", "Gualmatán");
        addOption(ciudadSelect, "Iles", "Iles");
        addOption(ciudadSelect, "Imués", "Imués");
        addOption(ciudadSelect, "Ipiales", "Ipiales");
        addOption(ciudadSelect, "La Cruz", "La Cruz");
        addOption(ciudadSelect, "La Florida", "La Florida");
        addOption(ciudadSelect, "La Llanada", "La Llanada");
        addOption(ciudadSelect, "La Tola", "La Tola");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Leiva", "Leiva");
        addOption(ciudadSelect, "Linares", "Linares");
        addOption(ciudadSelect, "Los Andes", "Los Andes");
        addOption(ciudadSelect, "Magüí Payán", "Magüí Payán");
        addOption(ciudadSelect, "Mallama", "Mallama");
        addOption(ciudadSelect, "Mosquera", "Mosquera");
        addOption(ciudadSelect, "Nariño", "Nariño");
        addOption(ciudadSelect, "Olaya Herrera", "Olaya Herrera");
        addOption(ciudadSelect, "Ospina", "Ospina");
        addOption(ciudadSelect, "Policarpa", "Policarpa");
        addOption(ciudadSelect, "Potosí", "Potosí");
        addOption(ciudadSelect, "Providencia", "Providencia");
        addOption(ciudadSelect, "Puerres", "Puerres");
        addOption(ciudadSelect, "Pupiales", "Pupiales");
        addOption(ciudadSelect, "Ricaurte", "Ricaurte");
        addOption(ciudadSelect, "Roberto Payán", "Roberto Payán");
        addOption(ciudadSelect, "Samaniego", "Samaniego");
        addOption(ciudadSelect, "San Bernardo", "San Bernardo");
        addOption(ciudadSelect, "San Lorenzo", "San Lorenzo");
        addOption(ciudadSelect, "San Pablo", "San Pablo");
        addOption(ciudadSelect, "San Pedro de Cartago", "San Pedro de Cartago");
        addOption(ciudadSelect, "Sandoná", "Sandoná");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santacruz", "Santacruz");
        addOption(ciudadSelect, "Sapuyes", "Sapuyes");
        addOption(ciudadSelect, "Taminango", "Taminango");
        addOption(ciudadSelect, "Tangua", "Tangua");
        addOption(ciudadSelect, "Tumaco", "Tumaco");
        addOption(ciudadSelect, "Túquerres", "Túquerres");
        addOption(ciudadSelect, "Yacuanquer", "Yacuanquer");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Norte de Santander") {
        addOption(ciudadSelect, "Cúcuta", "Cúcuta");
        addOption(ciudadSelect, "Ábrego", "Ábrego");
        addOption(ciudadSelect, "Arboledas", "Arboledas");
        addOption(ciudadSelect, "Bochalema", "Bochalema");
        addOption(ciudadSelect, "Bucarasica", "Bucarasica");
        addOption(ciudadSelect, "Cáchira", "Cáchira");
        addOption(ciudadSelect, "Cácota", "Cácota");
        addOption(ciudadSelect, "Chinácota", "Chinácota");
        addOption(ciudadSelect, "Chitagá", "Chitagá");
        addOption(ciudadSelect, "Convención", "Convención");
        addOption(ciudadSelect, "Cucutilla", "Cucutilla");
        addOption(ciudadSelect, "Durania", "Durania");
        addOption(ciudadSelect, "El Carmen", "El Carmen");
        addOption(ciudadSelect, "El Tarra", "El Tarra");
        addOption(ciudadSelect, "El Zulia", "El Zulia");
        addOption(ciudadSelect, "Gramalote", "Gramalote");
        addOption(ciudadSelect, "Hacarí", "Hacarí");
        addOption(ciudadSelect, "Herrán", "Herrán");
        addOption(ciudadSelect, "La Esperanza", "La Esperanza");
        addOption(ciudadSelect, "La Playa de Belén", "La Playa de Belén");
        addOption(ciudadSelect, "Labateca", "Labateca");
        addOption(ciudadSelect, "Los Patios", "Los Patios");
        addOption(ciudadSelect, "Lourdes", "Lourdes");
        addOption(ciudadSelect, "Mutiscua", "Mutiscua");
        addOption(ciudadSelect, "Ocaña", "Ocaña");
        addOption(ciudadSelect, "Pamplona", "Pamplona");
        addOption(ciudadSelect, "Pamplonita", "Pamplonita");
        addOption(ciudadSelect, "Puerto Santander", "Puerto Santander");
        addOption(ciudadSelect, "Ragonvalia", "Ragonvalia");
        addOption(ciudadSelect, "Salazar de Las Palmas", "Salazar de Las Palmas");
        addOption(ciudadSelect, "San Calixto", "San Calixto");
        addOption(ciudadSelect, "San Cayetano", "San Cayetano");
        addOption(ciudadSelect, "Santiago", "Santiago");
        addOption(ciudadSelect, "Sardinata", "Sardinata");
        addOption(ciudadSelect, "Silos", "Silos");
        addOption(ciudadSelect, "Teorama", "Teorama");
        addOption(ciudadSelect, "Tibú", "Tibú");
        addOption(ciudadSelect, "Toledo", "Toledo");
        addOption(ciudadSelect, "Villa Caro", "Villa Caro");
        addOption(ciudadSelect, "Villa del Rosario", "Villa del Rosario");
        
        // Agrega más opciones de ciudad aquí
     }

     else if (departamento === "Putumayo") {
        addOption(ciudadSelect, "Mocoa", "Mocoa");
        addOption(ciudadSelect, "Colón", "Colón");
        addOption(ciudadSelect, "Orito", "Orito");
        addOption(ciudadSelect, "Puerto Asís", "Puerto Asís");
        addOption(ciudadSelect, "Puerto Caicedo", "Puerto Caicedo");
        addOption(ciudadSelect, "Puerto Guzmán", "Puerto Guzmán");
        addOption(ciudadSelect, "Puerto Leguízamo", "Puerto Leguízamo");
        addOption(ciudadSelect, "Sibundoy", "Sibundoy");
        addOption(ciudadSelect, "San Francisco", "San Francisco");
        addOption(ciudadSelect, "San Miguel", "San Miguel");
        addOption(ciudadSelect, "Santiago", "Santiago");
        addOption(ciudadSelect, "Valle del Guamuez", "Valle del Guamuez");
        addOption(ciudadSelect, "Villagarzón", "Villagarzón");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Quindío") {
        addOption(ciudadSelect, "Armenia", "Armenia");
        addOption(ciudadSelect, "Calarcá", "Calarcá");
        addOption(ciudadSelect, "Circasia", "Circasia");
        addOption(ciudadSelect, "Filandia", "Filandia");
        addOption(ciudadSelect, "Génova", "Génova");
        addOption(ciudadSelect, "La Tebaida", "La Tebaida");
        addOption(ciudadSelect, "Montenegro", "Montenegro");
        addOption(ciudadSelect, "Pijao", "Pijao");
        +addOption(ciudadSelect, "Quimbaya", "Quimbaya");
        +addOption(ciudadSelect, "Salento", "Salento");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Risaralda") {
        addOption(ciudadSelect, "Pereira", "Pereira");
        addOption(ciudadSelect, "Apía", "Apía");
        addOption(ciudadSelect, "Balboa", "Balboa");
        addOption(ciudadSelect, "Belén de Umbría", "Belén de Umbría");
        addOption(ciudadSelect, "Dosquebradas", "Dosquebradas");
        addOption(ciudadSelect, "Guática", "Guática");
        addOption(ciudadSelect, "La Celia", "La Celia");
        addOption(ciudadSelect, "La Virginia", "La Virginia");
        addOption(ciudadSelect, "Marsella", "Marsella");
        addOption(ciudadSelect, "Mistrató", "Mistrató");
        addOption(ciudadSelect, "Pueblo Rico", "Pueblo Rico");
        addOption(ciudadSelect, "Quinchía", "Quinchía");
        addOption(ciudadSelect, "Santa Rosa de Cabal", "Santa Rosa de Cabal");
        addOption(ciudadSelect, "Santuario", "Santuario");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "San Andrés y Providencia") {
        addOption(ciudadSelect, "San Andrés", "San Andrés");
        addOption(ciudadSelect, "Providencia", "Providencia");
        addOption(ciudadSelect, "Santa Catalina", "Santa Catalina");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Santander") {
        addOption(ciudadSelect, "Barichara", "Barichara");
        addOption(ciudadSelect, "Barrancabermeja", "Barrancabermeja");
        addOption(ciudadSelect, "Betulia", "Betulia");
        addOption(ciudadSelect, "Bucaramanga", "Bucaramanga");
        addOption(ciudadSelect, "Cabrera", "Cabrera");
        addOption(ciudadSelect, "California", "California");
        addOption(ciudadSelect, "Capitanejo", "Capitanejo");
        addOption(ciudadSelect, "Carcasí", "Carcasí");
        addOption(ciudadSelect, "Cepitá", "Cepitá");
        addOption(ciudadSelect, "Cerrito", "Cerrito");
        addOption(ciudadSelect, "Charalá", "Charalá");
        addOption(ciudadSelect, "Charta", "Charta");
        addOption(ciudadSelect, "Chima", "Chima");
        addOption(ciudadSelect, "Chipatá", "Chipatá");
        addOption(ciudadSelect, "Cimitarra", "Cimitarra");
        addOption(ciudadSelect, "Concepción", "Concepción");
        addOption(ciudadSelect, "Confines", "Confines");
        addOption(ciudadSelect, "Contratación", "Contratación");
        addOption(ciudadSelect, "Coromoro", "Coromoro");
        addOption(ciudadSelect, "Curití", "Curití");
        addOption(ciudadSelect, "El Carmen de Chucurí", "El Carmen de Chucurí");
        addOption(ciudadSelect, "El Guacamayo", "El Guacamayo");
        addOption(ciudadSelect, "El Peñón", "El Peñón");
        addOption(ciudadSelect, "El Playón", "El Playón");
        addOption(ciudadSelect, "Encino", "Encino");
        addOption(ciudadSelect, "Enciso", "Enciso");
        addOption(ciudadSelect, "Floridablanca", "Floridablanca");
        addOption(ciudadSelect, "Galán", "Galán");
        addOption(ciudadSelect, "Gámbita", "Gámbita");
        addOption(ciudadSelect, "Girón", "Girón");
        addOption(ciudadSelect, "Guaca", "Guaca");
        addOption(ciudadSelect, "Guadalupe", "Guadalupe");
        addOption(ciudadSelect, "Guapota", "Guapota");
        addOption(ciudadSelect, "Guavatá", "Guavatá");
        addOption(ciudadSelect, "Güepsa", "Güepsa");
        addOption(ciudadSelect, "Hato", "Hato");
        addOption(ciudadSelect, "Jesús María", "Jesús María");
        addOption(ciudadSelect, "Jordán", "Jordán");
        addOption(ciudadSelect, "La Belleza", "La Belleza");
        addOption(ciudadSelect, "Landázuri", "Landázuri");
        addOption(ciudadSelect, "La Paz", "La Paz");
        addOption(ciudadSelect, "Lebríja", "Lebríja");
        addOption(ciudadSelect, "Los Santos", "Los Santos");
        addOption(ciudadSelect, "Macaravita", "Macaravita");
        addOption(ciudadSelect, "Málaga", "Málaga");
        addOption(ciudadSelect, "Matanza", "Matanza");
        addOption(ciudadSelect, "Mogotes", "Mogotes");
        addOption(ciudadSelect, "Molagavita", "Molagavita");
        addOption(ciudadSelect, "Ocamonte", "Ocamonte");
        addOption(ciudadSelect, "Oiba", "Oiba");
        addOption(ciudadSelect, "Onzaga", "Onzaga");
        addOption(ciudadSelect, "Palmar", "Palmar");
        addOption(ciudadSelect, "Palmas del Socorro", "Palmas del Socorro");
        addOption(ciudadSelect, "Páramo", "Páramo");
        addOption(ciudadSelect, "Piedecuesta", "Piedecuesta");
        addOption(ciudadSelect, "Pinchote", "Pinchote");
        addOption(ciudadSelect, "Puente Nacional", "Puente Nacional");
        addOption(ciudadSelect, "Puerto Parra", "Puerto Parra");
        addOption(ciudadSelect, "Puerto Wilches", "Puerto Wilches");
        addOption(ciudadSelect, "Rionegro", "Rionegro");
        addOption(ciudadSelect, "Sabana de Torres", "Sabana de Torres");
        addOption(ciudadSelect, "San Andrés", "San Andrés");
        addOption(ciudadSelect, "San Benito", "San Benito");
        addOption(ciudadSelect, "San Gil", "San Gil");
        addOption(ciudadSelect, "San Joaquín", "San Joaquín");
        addOption(ciudadSelect, "San José de Miranda", "San José de Miranda");
        addOption(ciudadSelect, "San Miguel", "San Miguel");
        addOption(ciudadSelect, "San Vicente de Chucurí", "San Vicente de Chucurí");
        addOption(ciudadSelect, "Santa Bárbara", "Santa Bárbara");
        addOption(ciudadSelect, "Santa Helena del Opón", "Santa Helena del Opón");
        addOption(ciudadSelect, "Simacota", "Simacota");
        addOption(ciudadSelect, "Socorro", "Socorro");
        addOption(ciudadSelect, "Suaita", "Suaita");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Suratá", "Suratá");
        addOption(ciudadSelect, "Tona", "Tona");
        addOption(ciudadSelect, "Valle de San José", "Valle de San José");
        addOption(ciudadSelect, "Vélez", "Vélez");
        addOption(ciudadSelect, "Vetas", "Vetas");
        addOption(ciudadSelect, "Villanueva", "Villanueva");
        addOption(ciudadSelect, "Zapatoca", "Zapatoca");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Sucre") {
        addOption(ciudadSelect, "Buenavista", "Buenavista");
        addOption(ciudadSelect, "Caimito", "Caimito");
        addOption(ciudadSelect, "Chalán", "Chalán");
        addOption(ciudadSelect, "Colosó", "Colosó");
        addOption(ciudadSelect, "Corozal", "Corozal");
        addOption(ciudadSelect, "Coveñas", "Coveñas");
        addOption(ciudadSelect, "El Roble", "El Roble");
        addOption(ciudadSelect, "Galeras", "Galeras");
        addOption(ciudadSelect, "Guaranda", "Guaranda");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "Los Palmitos", "Los Palmitos");
        addOption(ciudadSelect, "Majagual", "Majagual");
        addOption(ciudadSelect, "Morroa", "Morroa");
        addOption(ciudadSelect, "Ovejas", "Ovejas");
        addOption(ciudadSelect, "Palmito", "Palmito");
        addOption(ciudadSelect, "Sampués", "Sampués");
        addOption(ciudadSelect, "San Benito Abad", "San Benito Abad");
        addOption(ciudadSelect, "San Juan de Betulia", "San Juan de Betulia");
        addOption(ciudadSelect, "San Marcos", "San Marcos");
        addOption(ciudadSelect, "San Onofre", "San Onofre");
        addOption(ciudadSelect, "San Pedro", "San Pedro");
        addOption(ciudadSelect, "San Luis de Sincé", "San Luis de Sincé");
        addOption(ciudadSelect, "Sincelejo", "Sincelejo");
        addOption(ciudadSelect, "Sucre", "Sucre");
        addOption(ciudadSelect, "Tolú", "Tolú");
        addOption(ciudadSelect, "Tolúviejo", "Tolúviejo");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Tolima") {
        addOption(ciudadSelect, "Alpujarra", "Alpujarra");
        addOption(ciudadSelect, "Alvarado", "Alvarado");
        addOption(ciudadSelect, "Ambalema", "Ambalema");
        addOption(ciudadSelect, "Anzoátegui", "Anzoátegui");
        addOption(ciudadSelect, "Armero", "Armero");
        addOption(ciudadSelect, "Ataco", "Ataco");
        addOption(ciudadSelect, "Cajamarca", "Cajamarca");
        addOption(ciudadSelect, "Carmen de Apicalá", "Carmen de Apicalá");
        addOption(ciudadSelect, "Casabianca", "Casabianca");
        addOption(ciudadSelect, "Chaparral", "Chaparral");
        addOption(ciudadSelect, "Coello", "Coello");
        addOption(ciudadSelect, "Coyaima", "Coyaima");
        addOption(ciudadSelect, "Cunday", "Cunday");
        addOption(ciudadSelect, "Dolores", "Dolores");
        addOption(ciudadSelect, "Espinal", "Espinal");
        addOption(ciudadSelect, "Falan", "Falan");
        addOption(ciudadSelect, "Flandes", "Flandes");
        addOption(ciudadSelect, "Fresno", "Fresno");
        addOption(ciudadSelect, "Guamo", "Guamo");
        addOption(ciudadSelect, "Herveo", "Herveo");
        addOption(ciudadSelect, "Honda", "Honda");
        addOption(ciudadSelect, "Ibagué", "Ibagué");
        addOption(ciudadSelect, "Icononzo", "Icononzo");
        addOption(ciudadSelect, "Lérida", "Lérida");
        addOption(ciudadSelect, "Líbano", "Líbano");
        addOption(ciudadSelect, "Mariquita", "Mariquita");
        addOption(ciudadSelect, "Melgar", "Melgar");
        addOption(ciudadSelect, "Murillo", "Murillo");
        addOption(ciudadSelect, "Natagaima", "Natagaima");
        addOption(ciudadSelect, "Ortega", "Ortega");
        addOption(ciudadSelect, "Palocabildo", "Palocabildo");
        addOption(ciudadSelect, "Piedras", "Piedras");
        addOption(ciudadSelect, "Planadas", "Planadas");
        addOption(ciudadSelect, "Prado", "Prado");
        addOption(ciudadSelect, "Purificación", "Purificación");
        addOption(ciudadSelect, "Rioblanco", "Rioblanco");
        addOption(ciudadSelect, "Roncesvalles", "Roncesvalles");
        addOption(ciudadSelect, "Rovira", "Rovira");
        addOption(ciudadSelect, "Saldaña", "Saldaña");
        addOption(ciudadSelect, "San Antonio", "San Antonio");
        addOption(ciudadSelect, "San Luis", "San Luis");
        addOption(ciudadSelect, "Santa Isabel", "Santa Isabel");
        addOption(ciudadSelect, "Suárez", "Suárez");
        addOption(ciudadSelect, "Valle de San Juan", "Valle de San Juan");
        addOption(ciudadSelect, "Venadillo", "Venadillo");
        addOption(ciudadSelect, "Villahermosa", "Villahermosa");
        addOption(ciudadSelect, "Villarrica", "Villarrica");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Valle del Cauca") {
        addOption(ciudadSelect, "Alcalá", "Alcalá");
        addOption(ciudadSelect, "Andalucía", "Andalucía");
        addOption(ciudadSelect, "Ansermanuevo", "Ansermanuevo");
        addOption(ciudadSelect, "Argelia", "Argelia");
        addOption(ciudadSelect, "Bolívar", "Bolívar");
        addOption(ciudadSelect, "Buenaventura", "Buenaventura");
        addOption(ciudadSelect, "Bugalagrande", "Bugalagrande");
        addOption(ciudadSelect, "Caicedonia", "Caicedonia");
        addOption(ciudadSelect, "Cali", "Cali");
        addOption(ciudadSelect, "Calima", "Calima");
        addOption(ciudadSelect, "Candelaria", "Candelaria");
        addOption(ciudadSelect, "Cartago", "Cartago");
        addOption(ciudadSelect, "Dagua", "Dagua");
        addOption(ciudadSelect, "El Águila", "El Águila");
        addOption(ciudadSelect, "El Cairo", "El Cairo");
        addOption(ciudadSelect, "El Cerrito", "El Cerrito");
        addOption(ciudadSelect, "El Dovio", "El Dovio");
        addOption(ciudadSelect, "Florida", "Florida");
        addOption(ciudadSelect, "Ginebra", "Ginebra");
        addOption(ciudadSelect, "Guacarí", "Guacarí");
        addOption(ciudadSelect, "Jamundí", "Jamundí");
        addOption(ciudadSelect, "La Cumbre", "La Cumbre");
        addOption(ciudadSelect, "La Unión", "La Unión");
        addOption(ciudadSelect, "La Victoria", "La Victoria");
        addOption(ciudadSelect, "Obando", "Obando");
        addOption(ciudadSelect, "Palmira", "Palmira");
        addOption(ciudadSelect, "Pradera", "Pradera");
        addOption(ciudadSelect, "Restrepo", "Restrepo");
        addOption(ciudadSelect, "Riofrío", "Riofrío");
        addOption(ciudadSelect, "Roldanillo", "Roldanillo");
        addOption(ciudadSelect, "San Pedro", "San Pedro");
        addOption(ciudadSelect, "Sevilla", "Sevilla");
        addOption(ciudadSelect, "Toro", "Toro");
        addOption(ciudadSelect, "Trujillo", "Trujillo");
        addOption(ciudadSelect, "Tuluá", "Tuluá");
        addOption(ciudadSelect, "Ulloa", "Ulloa");
        addOption(ciudadSelect, "Versalles", "Versalles");
        addOption(ciudadSelect, "Vijes", "Vijes");
        addOption(ciudadSelect, "Yotoco", "Yotoco");
        addOption(ciudadSelect, "Yumbo", "Yumbo");
        addOption(ciudadSelect, "Zarzal", "Zarzal");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Vaupés") {
        addOption(ciudadSelect, "Mitú", "Mitú");
        addOption(ciudadSelect, "Carurú", "Carurú");
        addOption(ciudadSelect, "Taraira", "Taraira");
        addOption(ciudadSelect, "Pacoa", "Pacoa");
        addOption(ciudadSelect, "Yavaraté", "Yavaraté");
        
        // Agrega más opciones de ciudad aquí
     }
     else if (departamento === "Vichada") {
        addOption(ciudadSelect, "Puerto Carreño", "Puerto Carreño");
        addOption(ciudadSelect, "La Primavera", "La Primavera");
        addOption(ciudadSelect, "Santa Rosalía", "Santa Rosalía");
        addOption(ciudadSelect, "Cumaribo", "Cumaribo");
        
        // Agrega más opciones de ciudad aquí
     }
       
    // Agrega más bloques "else if" para los demás departamentos
    
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}