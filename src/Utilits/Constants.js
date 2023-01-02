import React from 'react';
import axios from 'axios';

export const BASE_URL = 'http://103.117.66.70:5001/api/';

export const httpClient = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

export const initialState = {
  login_response: null,
  all_product: [],
  error: false,
  isLoading: false,
};

export const POST_METHOD = 'post';
export const GET_METHOD = 'get';

export const APPLICATION_JSON_HEADER = {'Content-Type': 'Application/json'};
export const AUTHORIZATION = userToken => {
  return {
    headers: {
      Authorization: userToken ? `Bearer ${userToken}` : '',
    },
  };
};
