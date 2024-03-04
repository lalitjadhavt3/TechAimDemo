import axios from 'axios';
import {useEffect} from 'react';
import {
  initializeSslPinning,
  isSslPinningAvailable,
} from 'react-native-ssl-public-key-pinning';

// Define the base URL for your API
const baseURL = 'https://lalitjadhav.in/mobile/';

// Initialize SSL pinning

initializeSslPinning({
  'lalitjadhav.in': {
    includeSubdomains: true,
    publicKeyHashes: [
      'xgQSGlFYAcoScFIZnXFilx/WQ8VVfQqtfjl8Btfv+CY=',
      'R3hcMOAGw0WFztuG2skTodoHp8IGid3Qg63Cn7YUYoM=',
    ],
  },
});

// Create a new axios instance with the base URL and default headers
const api = axios.create({
  baseURL,
  headers: {
    // Add any default headers here if needed
  },
});

// Request interceptor for modifying requests before they are sent
api.interceptors.request.use(
  config => {
    // You can add any request modification logic here
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling responses
api.interceptors.response.use(
  response => {
    // You can add any response handling logic here
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
