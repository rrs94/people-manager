require('dotenv').config();

module.exports = {
  env: {
    PEOPLE_API_ENDPOINT: process.env.PEOPLE_API_ENDPOINT,
    PEOPLE_API_TOKEN: process.env.PEOPLE_API_TOKEN,
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};
