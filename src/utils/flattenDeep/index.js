/* eslint-disable no-unused-expressions */
const flattenDeep = (arr) => {
  Array.isArray(arr)
    ? arr.reduce((a, b) => a.concat(flattenDeep(b)), [])
    : [arr];
};
export default flattenDeep;
