const {suma,resta,multiplicacion} = require("../calculadora");


QUnit.module('calculdora');


QUnit.test('suma', assert => {
    assert.equal(suma(1, 2), 3, 'suma de 2 numeros');
});

QUnit.test("multiplicacion", asserts => {
    asserts.equal(multiplicacion(3, 2), 6, 'multiplicacion de 2 numereos');
})

/* QUnit.test("resta", asserts => {
    asserts.equal(resta(3, 2), "1", 'resta de 2 numeros');
}) */


 QUnit.test("resta", asserts => {
    //strictEqual( actual, expected [, message ] )
    //Expresión: funcion para probar
    //Valor : el valor de comparación conocido de la prueba
    //mensaje: Una breve descripción de la prueba

    asserts.strictEqual(resta(3, 1), 2, "resta estricta");
})  