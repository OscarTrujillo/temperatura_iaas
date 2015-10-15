var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    
    
    test('32c = 89.6 Farenheit', function() {
        original.value = "32c";
        calculate();
        assert.deepEqual(converted.innerHTML, "89.6 Farenheit");
    });
    test('68f = 20.0 Celsius', function() {
        original.value = "68F";
        calculate();
        assert.deepEqual(converted.innerHTML, "20.0 Celsius");
    });
    
    
});
