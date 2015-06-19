import Promise from 'bluebird'
import request from 'superagent'


/**
 * somple promise wrapper around a superagent get request.
 * @param path
 * @returns {Promise|*}
 */
export function simpleGet (path) {
    return new Promise((resolve, reject) => {
        request.get(path)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
    });

}
