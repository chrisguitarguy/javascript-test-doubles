const assert = require('assert');
const subject = require('./subject');

function stubUuid() {
    return Promise.resolve('testing123');
}

if (require.main === module) {
    subject.systemUnderTest(stubUuid).then(result => {
        assert.strictEqual(result, 'New UUID is testing123');
    })
}
