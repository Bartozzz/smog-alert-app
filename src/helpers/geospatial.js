export const { sin, cos, sqrt, atan2 } = Math;
export const EARTH_RADIUS_M = 6371e3;
export const EARTH_RADIUS_KM = 6371;

/**
 * Converts numeric degrees to radians.
 *
 * @param   {number}  n
 * @return  {number}
 */
export function toRad(n) {
  return n * Math.PI / 180;
}

/**
 * Converts radians to numeric degrees.
 *
 * @param   {number}  n
 * @return  {number}
 */
export function toDeg(n) {
  return n * 180 / Math.PI;
}

/**
 * The haversine formula determines the great-circle distance between two points
 * on a sphere given their longitudes and latitudes.
 *
 * @see     https://en.wikipedia.org/wiki/Haversine_formula
 * @see     https://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param   {Coords}  a
 * @param   {Coords}  b
 * @param   {number}  r
 * @return  {number}
 */
export function hav(a, b, r = EARTH_RADIUS_KM) {
  const φ1 = toRad(a.latitude);
  const φ2 = toRad(b.latitude);

  // const λ1 = toRad(a.longitude);
  // const λ2 = toRad(b.longitude);

  const Δφ = toRad(b.latitude - a.latitude);
  const Δλ = toRad(b.longitude - a.longitude);

  // Square of half the chord length between the points:
  const x =
    sin(Δφ / 2) * sin(Δφ / 2) + cos(φ1) * cos(φ2) * sin(Δλ / 2) * sin(Δλ / 2);

  // Angular distance in radians:
  const c = 2 * atan2(sqrt(x), sqrt(1 - x));

  return r * c;
}
