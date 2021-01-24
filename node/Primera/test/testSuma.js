const suma =  require('../suma');


//QUnit.module( nombre [, options] [, nested ] )
//nombre=Etiqueta para este grupo de pruebas.
//Configure las callbacks de hook  para que se ejecuten antes o después de la ejecución de la prueba.
//Un alcance para crear módulos anidados 

QUnit.module('calculdora');

//QUnit.test( nombre, callback (test) )
//nombre= Título de la unidad que se está probando.
// funcion para realizar el test.
//test Un nuevo objeto con metodos para el test 

QUnit.test('suma', assert => {

   // equal(Expresión, valor [,mensage ] )

   //Expresión: funcion para probar
   //Valor : el valor de comparación conocido de la prueba
   //mensaje: Una breve descripción de la prueba

 // assert.equal(suma(1, 2), 3, 'sumamos dos numeros');
  assert.equal(suma(1, 2), 4, 'sumamos dos numeros');
});
