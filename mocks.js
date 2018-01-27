const assert = require('assert');
const subject = require('./subject');

function mockUuid(...args) {
    assert.deepEqual(args, [], 'should not be called with any arguments');
    return Promise.resolve('testing123')
}


if (require.main === module) {
    subject.systemUnderTest(mockUuid).then(result => {
        assert.strictEqual(result, 'New UUID is testing123');
    })
}
