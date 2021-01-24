const {suma,resta,multiplicacion} = require('../calculadora');
const {saludar,contrario,objeto} = require("../varios");

QUnit.module('calculdora');


QUnit.test('suma', assert => {
  assert.equal(suma(1, 2), 3, '2 + 1 = 2');
});

QUnit.test("resta", asserts => {
  asserts.strictEqual(resta(3, 1), 2, "resta estricta");
})

QUnit.test("multiplicacion", asserts => {
  asserts.equal(multiplicacion(3, 2), 6, '3 * 2  = 6');
})

QUnit.module('varios');

QUnit.test("saludar", asserts => {
  asserts.equal(saludar("yamil"), "hola yamil", 'saluda con al nombre que se le pasa por parametro');
})

QUnit.test("contrario", asserts => {
    asserts.equal(contrario(false), true, ' devuelve lo contrario');
  })
  

QUnit.test("valores de un objeto", assert => {

    //deepEqual( expresion, valor [, mensaje ] )
      //Expresión: objeto a comprobar.
    //Valor : el valor de comparación conocido de la prueba
    //mensaje: Una breve descripción de la prueba
    //assert.deepEqual(objeto, {"nombre": "yamil","apellido": "esteban"}, "resultado de objeto yamil");
  assert.deepEqual(objeto, {"nombre": "yamil","apellido": "esteban", "sexo": "varon"}, "resultado de objeto yamil");

});
