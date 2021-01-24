const sumar = (a, b) => a + b;

QUnit.module('sumar', function () {
    QUnit.test('suma dos valores', function (assert) {
        assert.equal(sumar(1, 2), 2, '1 + 1 = 2');
    });
});