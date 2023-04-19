/**
 * Handles the response from an API call represented as a Promise.
 *
 * @param {Promise} promise - A Promise that represents the response from an API call.
 * @returns {Promise} A Promise that resolves with an object containing status and body properties if the API call is successful,
 *                    and rejects with an error object if the API call fails. The Promise will always call the finally block
 *                    to log a message indicating that a response was received from the API.
 * @example
 * const apiPromise = fetchDataFromAPI(); // Fetch data from API and return a Promise
 * handleResponseFromAPI(apiPromise)
 *   .then(response => {
 *     console.log('API call successful:', response.status, response.body);
 *   })
 *   .catch(error => {
 *     console.error('API call failed:', error.message);
 *   });
 */
export default function handleResponseFromAPI(promise) {
  return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => new Error()) // If the Promise rejects, return a new error object
      .finally(() => console.log('Got a response from the API')); // Log a message indicating that a response was received from the API in the finally block
}
