export function hasOwnProp(object, key) {
  return {}.hasOwnProperty.call(object, key);
}
