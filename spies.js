const assert = require('assert');
const subject = require('./subject');

function spyUuid(retval) {
    let spy = {
        calls: 0,
        args: [],
    };
    spy.uuid = function (...args) {
        this.calls += 1;
        this.args.push(args);
        return Promise.resolve(retval)
    }.bind(spy);

    return spy;
}


if (require.main === module) {
    const spy = spyUuid('testing123');
    subject.systemUnderTest(spy.uuid).then(result => {
        assert.strictEqual(result, 'New UUID is testing123');
        assert.strictEqual(spy.calls, 1, 'should have been called once');
        assert.deepEqual(spy.args[0], [], 'should not have been called with any arguments');
    })
}
