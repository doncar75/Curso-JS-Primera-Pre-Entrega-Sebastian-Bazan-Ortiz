let nombre = prompt("¡Bienvenido a Doncar Burger! Por favor, introduce tu nombre:");
alert("Hola, " + nombre + ". ¡A continuación verás nuestro menú!");

function mostrarMenu() {
    let totalCompra = 0; // Variable para mantener el total de la compra
    let opcionElegida;
        do {
            opcionElegida = prompt("Estas son nuestras hamburguesas disponibles:\n\n" +
                "1. Hamburguesa Clásica con Lechuga y Tomate- $1100\n" +
                "2. Hamburguesa con Cheddar - $1500\n" +
                "3. Hamburguesa Doble Completa - $2500\n" +
                "4. Hamburguesa Vegana - $60000\n\n" +
                "Por favor, introduce el número de la hamburguesa que deseas (1-4), o presiona 'x' para salir:");

        switch (opcionElegida) {
            case "1":
                totalCompra += 1100; // Suma el precio de la Hamburguesa Clásica al total
                alert("Has elegido la Hamburguesa Clásica. ¡Buen provecho!");
                break;
            case "2":
                totalCompra += 1500; // Suma el precio de la Hamburguesa con Queso al total
                alert("Has elegido la Hamburguesa con Queso. ¡Buen provecho!");
                break;
            case "3":
                totalCompra += 2000; // Suma el precio de la Hamburguesa Doble al total
                alert("Has elegido la Hamburguesa Doble. ¡Buen provecho!");
                break;
            case "4":
                totalCompra += 60000; // Suma el precio de la Hamburguesa Vegana al total
                alert("Has elegido la Hamburguesa Vegana. ¡Buen provecho!");
                break;
            case "x":
                alert("Gracias por visitar Doncar Burger. ¡Que tengas un buen día!");
                return; // Sale de la función si el usuario decide salir
            default:
                alert("Por favor, selecciona una opción válida.");
        }
    
    let comprarMas = confirm("¿Quieres comprar algo más?");
    if (!comprarMas) {
        alert("Gracias por tu compra en Doncar Burger. Total a pagar: $" + totalCompra);
        return; // Sale de la función si el usuario no quiere comprar más
    }
    
    } while (true);
}

mostrarMenu();
