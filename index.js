function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}



function add(a, b) {
    return a + b;
}

// Простой тест, использующий assert
function testAdd() {
    assert(add(2, 3) === 5, "Add function should return 5");
}



fetch('https://catfact.ninja/fact').then(response => response.json()).then(data => console.log(data));

testAdd();

