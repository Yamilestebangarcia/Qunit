const {suma,parametro} = require("../Otras")


QUnit.module("otras");

/*
QUnit.test("ejemplo pasa", assert => {

    //false( comparacion [, mensaje ] )
    //comparacion= Expresión aprobar
    //mesaje= descripcion

    assert.false(parametro("hola" == 1), "Introduzco falso");
});


QUnit.test("ejemplo no pasa", assert => {
    assert.false(parametro("hola" == "hola"), "Introduzco true");
}); 
 */

/*
QUnit.test("ejemplo no pasa", assert => {

    //true( comparacion [, mensaje ] )
    //comparacion= Expresión aprobar
    //mesaje= descripcion
    assert.true(parametro("hola" == 1), "Introduzco true");
});
 

QUnit.test("ejemplo si pasa", assert => {
    assert.true(parametro("hola" == "hola"), "true");
});
 */

QUnit.test( "a test", function( assert ) {
   // expect( numero )
   //numero=úmero de test en esta prueba.
    assert.expect( 2 );
  
  
    assert.strictEqual( suma(2,2), 4, "2+2=4" );
    assert.strictEqual( suma(2,2), 1, "2 + 4=6" );
  });



//ademas de estas tiene otras funciones que las he puesto por  que exigen conceptos mas avanzados.

//pero tiene funciones para controlar:
//-- la asincronia(assert.rejects (),asert.verifySteps ()) 
//-promesas(assert.rejects ())