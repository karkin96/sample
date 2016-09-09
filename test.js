let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;


assert.equal(hello('Test'), 'Здравствуйте, Test!');

assert.equal(plural(1), '1 раз');
assert.equal(plural(2), '2 раза');
assert.equal(plural(3), '3 раза');
assert.equal(plural(4), '4 раза');
assert.equal(plural(5), '5 раз');
assert.equal(plural(6), '6 раз');
assert.equal(plural(7), '7 раз');
assert.equal(plural(8), '8 раз');
assert.equal(plural(9), '9 раз');
assert.equal(plural(10), '10 раз');
assert.equal(plural(11), '11 раз');
assert.equal(plural(12), '12 раз');
assert.equal(plural(13), '13 раз');
assert.equal(plural(14), '14 раз');
assert.equal(plural(15), '15 раз');
assert.equal(plural(16), '16 раз');
assert.equal(plural(17), '17 раз');
assert.equal(plural(18), '18 раз');
assert.equal(plural(19), '19 раз');
assert.equal(plural(20), '20 раз');

assert.equal(plural(31), '31 раз');
assert.equal(plural(32), '32 раза');
assert.equal(plural(33), '33 раза');
assert.equal(plural(34), '34 раза');
assert.equal(plural(35), '35 раз');
assert.equal(plural(36), '36 раз');
assert.equal(plural(37), '37 раз');
assert.equal(plural(38), '38 раз');
assert.equal(plural(39), '39 раз');
assert.equal(plural(40), '40 раз');

assert.equal(plural(1012), '1012 раз');
assert.equal(plural(1004), '1004 раза');
assert.equal(plural(1019), '1019 раз');
assert.equal(plural(1020), '1020 раз');
assert.equal(plural(1022), '1022 раза');


