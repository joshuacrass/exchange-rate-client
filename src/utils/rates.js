// @flow
import axios from 'axios';
import queryString from 'query-string';

import config from 'Config/app-config.json';

const FetchCurrencyPairs = (): Promise<void> => {
  const url = config.pairsEndpoint;
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  return new Promise(resolve => {
    axios
      .get(url, axiosConfig)
      .then(res => resolve(res.data))
      .catch(err => {
        // eslint-disable-next-line
        console.warn('AXIOS ERROR: ', err);
      });
  });
};

const FetchCurrencyRates = (params: Object): Promise<void> => {
  const qs = queryString.stringify(params, {
    arrayFormat: 'index',
  });
  const url = `${config.ratesEndpoint}?${qs}`;
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  return new Promise(resolve => {
    axios
      .get(url, axiosConfig)
      .then(res => resolve(res.data))
      .catch(err => {
        // eslint-disable-next-line
        console.warn('AXIOS ERROR: ', err);
      });
  });
};

export { FetchCurrencyPairs, FetchCurrencyRates };
