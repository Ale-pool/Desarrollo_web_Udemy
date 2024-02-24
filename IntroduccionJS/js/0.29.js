

try {
    // Código que podría lanzar una excepción
    const resultado = dividir(10, 0);
    console.log(resultado); // Esta línea no se ejecutará si se lanza una excepción
    } catch (error) {
    // Bloque de código que se ejecuta si ocurre una excepción
    console.error('Error:', error.message);
    } finally {
    // Bloque de código opcional que se ejecuta siempre
    console.log('Finalizando...');
    }
    
    function dividir(dividendo, divisor) {
    if (divisor === 0) {
    throw new Error('¡División por cero!');
    }
    return dividendo / divisor;
    }