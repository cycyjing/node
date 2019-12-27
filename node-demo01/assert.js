const assert = require('assert')
// assert.ok('','enter')
// assert.ok('fff','enter')
function add(a, b){
  return a + b
}
// assert.equal(5, add(1, 5), 'not equal')
// assert.deepEqual(6, add(1, 5), 'not equal')
assert.deepStrictEqual({a:1}, {a:2}, 'not equal')