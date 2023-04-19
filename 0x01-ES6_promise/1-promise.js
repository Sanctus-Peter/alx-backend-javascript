/**
 * Creates a Promise that represents a prototype API call with a given boolean parameter.
 *
 * @returns {Promise} A Promise that resolves with an object containing status and body properties if the API call is successful,
 *                    and rejects with an error object if the API call fails.
 * @example
 * fakeAPICall(true)
 *   .then(response => {
 *     console.log('API call successful:', response.status, response.body);
 *   })
 *   .catch(error => {
 *     console.error('API call failed:', error.message);
 *   });
 * @param param
 */
export default function (param) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (param === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
