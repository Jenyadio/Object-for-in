export default function orderByProps(obj, arr) {
  const firstArr = [];
  const sortedByAlphabet = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      firstArr.push({ key, value: obj[key] });
    } else {
      sortedByAlphabet.push({ key, value: obj[key] });
    }
  }

  sortedByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...firstArr, ...sortedByAlphabet];
}
