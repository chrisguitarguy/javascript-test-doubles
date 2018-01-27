const fetch = require('isomorphic-fetch');

function httpbinUuid() {
    return fetch('https://httpbin.org/uuid')
        .then(resp => resp.json())
        .then(json => json.uuid);
}

function systemUnderTest(uuid) {
    return uuid().then(uuid => {
        return `New UUID is ${uuid}`;
    });
}

module.exports = {
    systemUnderTest,
    httpbinUuid,
}

if (require.main === module) {
    systemUnderTest(httpbinUuid).then(str => console.log(str));
}
