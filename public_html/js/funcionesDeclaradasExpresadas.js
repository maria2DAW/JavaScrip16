//Aquí se puede ejecutar la función 'saludar' porque es una función declarada.
//saludar();

//Función declarada:  -> Pertenecen al ámbito global del script. 
//Se puede invocar desde cualquier punto del script, ya que lo primero que lee 
//el navegador son las declaraciones de funciones.
//El navegador la ejecuta en tiempo de compilación.
function saludar()
{
    console.log('hola');
}

saludar();

//La función 'otroSaludo' no puede ejecutarse antes de la declaración de la 
//función, ya que ésta es una función expresada.
//El navegador (Chrome) dispará el error 'Uncaught TypeError: otroSaludo is not a function'
//otroSaludo();

//Funciones expresadas: -> No pertenecen al ámbito global.
//Pertence al ámbito de la variable donde ha sido declarada.
//El navegador NO la ejecuta en tiempo de compilación.
//Se ejecuta en tiempo de ejecución.
var otroSaludo = function()
{
    console.log('hola otra vez');
};