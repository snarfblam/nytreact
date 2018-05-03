var requestPackage = require('request');

/** Performs a request for the given url. Returns {response, body}
 * 
 * @param {string} uri 
 * @returns {Promise<{response: any, body: string}>}
 */
function request(uri) {
    return new Promise(function (resolve, reject) {
        requestPackage(uri, function (err, response, body) {
            if (err) {
                reject(err);
            } else {
                resolve({ response: response, body: body });
            }
        });
    });
}

module.exports = request;