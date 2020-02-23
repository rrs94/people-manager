const getQueryString = (options) => {
  let queryString = '';
  Object.keys(options).forEach((option, index) => {
    if (index === 0) {
      queryString += `?${option}=${options[option]}}`;
    } else {
      queryString += `&${option}=${options[option]}}`;
    }
  });
  return queryString;
};

export {
  getQueryString,// eslint-disable-line
};
