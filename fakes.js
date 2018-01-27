const assert = require('assert');
const subject = require('./subject');

function fakeUuid(retval) {
    return function () {
        return Promise.resolve(retval);
    };
}

if (require.main === module) {
    subject.systemUnderTest(fakeUuid('testing123')).then(result => {
        assert.strictEqual(result, 'New UUID is testing123');
    })
}
