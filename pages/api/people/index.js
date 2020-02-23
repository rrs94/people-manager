import fetch from 'isomorphic-unfetch';
import { getQueryString } from '../../../utils/request';

export default (req, res) => {
  const queryString = getQueryString(req.query);
  const options = {
    method: 'GET',
    withCredntials: true,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${process.env.PEOPLE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  fetch(`${process.env.PEOPLE_API_ENDPOINT}${queryString}`, options)
    .then((data) => data.json())
    .then((data) => {
      res.statusCode = 200;
      res.send(JSON.stringify(data));
    });
};
