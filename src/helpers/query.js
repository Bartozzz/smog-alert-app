/**
 * Creates a query string from object.
 *
 * @param   {Object}  object  Object to create query string from
 * @returns {string}          Generated query string
 */
export function query(object) {
  const q = Object.keys(object)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
    .join("&");

  return `?${q}`;
}
