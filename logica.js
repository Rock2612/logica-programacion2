function convertirTemperatura() {
    let celsius;

    while (true) {
        // 1. Solicitar el dato al usuario
        let entrada = prompt("Por favor, ingresa la temperatura en grados Celsius:");

        // Validar si el usuario canceló el prompt
        if (entrada === null) {
            console.log("Conversión cancelada por el usuario.");
            return; 
        }

        /* 2. Validar que la entrada no esté vacía y que sea un número válido
         Number(entrada) convierte el texto a número. Si no es válido, da NaN.
         El trim() evita que un string con solo espacios sea tomado como 0. */
        if (entrada.trim() !== "" && !isNaN(Number(entrada))) {
            celsius = Number(entrada);
            break; // Salimos del bucle si el dato es correcto
        } else {
            // Mensaje de error si la entrada no es un número
            alert("Error: El valor ingresado no es un número válido. Inténtalo de nuevo.");
        }
    }

    
    let fahrenheit = (celsius * 9) / 5 + 32;
    // Kelvin = Celsius + 273.15
    let kelvin = celsius + 273.15;

    
    console.log(`Entrada: ${celsius}`);
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
    
    
    alert(`Resultados para ${celsius}°C:\nGrados Kelvin: ${kelvin}\nGrados Fahrenheit: ${fahrenheit}`);
}


convertirTemperatura();