import {Alert} from 'react-native';

let URL = 'https://balldontlie.io/api/v1';

const request = async (method, endpoint, data) => {
  const headers = {'Content-Type': 'application/json'};

  const url = `${URL}${endpoint}`;

  return fetch(url, {method, headers, body: JSON.stringify(data)})
    .then(res => res.json())
    .then(res => ({networkSuccess: true, ...res}))
    .catch(e => {
      console.log(e);
      return {networkSuccess: false};
    });
};

export {request};
