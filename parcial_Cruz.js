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
console.log("Tipo de descuentoEspecial: " + typeof descuentoEspecial); // Nota: JS devuelve 'object' por un error histórico
console.log("Tipo de proximoEvento: " + typeof proximoEvento);