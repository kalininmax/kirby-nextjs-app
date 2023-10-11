const API_URL = 'http://kalininmax.temp.swtest.ru/api/query';
// const API_URL = 'http://localhost:8008/api/query';

// const username = 'maxim.kalinin@sborkaproject.com';
// const password = '.fRuQPYfahg3wbF';
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

export { API_URL, username, password };
