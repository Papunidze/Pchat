exports.sanitizeJSONObjectProperties = (jsonObj, properties) => {
  let obj = {};

  for (let key in jsonObj) {
    if (properties.includes(key)) {
      obj[key] = jsonObj[key];
    }
  }
  return obj;
};
