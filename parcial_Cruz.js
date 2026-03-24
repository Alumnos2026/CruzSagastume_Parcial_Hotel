alert("HOLA BIENVENIDO A LA PAGINA DEL PARCIAL DE INFORMATICA HOTELERA");
console.log("Bienvenido al parcial");

// 1. String (Cadena de texto)
let nombreHotel = "Hotel Informáticos Resort";
let ubicacion = "Guatemala City";

// 2. Number (Número)
let cantidadHabitaciones = 45;

// 3. Boolean (Booleano)
let tieneDisponibilidad = true;

// 4. Null (Nulo - ausencia de valor intencional)
let descuentoEspecial = null;

// 5. Undefined (Indefinido - variable sin asignar)
let proximoEvento;

// Mostrar resultados en la consola
console.log("--- Información del Sistema ---");
console.log("Hotel: " + nombreHotel);
console.log("Ubicación: " + ubicacion);
console.log("Total habitaciones: " + cantidadHabitaciones);
console.log("¿Hay cupo?: " + tieneDisponibilidad);
console.log("Descuento actual: ", descuentoEspecial);
console.log("Evento pendiente: ", proximoEvento);

// Verificación de tipos de datos
console.log("--- Tipos de Datos ---");
console.log("Tipo de nombreHotel: " + typeof nombreHotel);
console.log("Tipo de cantidadHabitaciones: " + typeof cantidadHabitaciones);
console.log("Tipo de tieneDisponibilidad: " + typeof tieneDisponibilidad);
console.log("Tipo de descuentoEspecial: " + typeof descuentoEspecial); 
console.log("Tipo de proximoEvento: " + typeof proximoEvento);



const todosLosBotones = document.querySelectorAll('.btn');

todosLosBotones.forEach(boton => {
    

    boton.addEventListener('mouseenter', function() {
        
        this.style.transform = "scale(1.1)";
        this.style.transition = "all 0.3s ease";
        
       
        if (this.classList.contains('btn-success')) {
            this.style.boxShadow = "0 0 20px #25D366";
        } else {
            
            this.style.boxShadow = "0 0 15px rgba(13, 110, 253, 0.5)";
        }
    });

   
    boton.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });

    
    boton.addEventListener('mousedown', function() {
        this.style.transform = "scale(0.95)"; 
    });

    boton.addEventListener('mouseup', function() {
        this.style.transform = "scale(1.1)"; 
    });
});

console.log("Efectos dinámicos de botones cargados con éxito.");