function makeHashMap(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 1) {
    result[arr[i].id] = arr[i].x;
  }
  return result;
}

export default makeHashMap;
