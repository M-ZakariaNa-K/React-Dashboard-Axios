import axios from 'axios';
import { toast } from 'react-toastify'; // For alerts
import { getItem, setItem, removeItem } from '../util/LocalStorage'; // Implement these to handle local storage
/*NOTE FROM ZAKARIA:
 here i will put the base url  PLEASE change it to be 1277.0.0.8/api/(here the passed url come from the component when i cll the function)  */
const BASE_URL = 'https://freetestapi.com/api/v1/authors';
const AUTH_ERROR = 401;

// Function to handle API responses and errors
const handleResponse = (response) => {
    const { status, data } = response;
    if (status === AUTH_ERROR) {
        // Handle unauthorized access (e.g., reset user session)
        resetUser();
        return null;
    }
    if (status >= 200 && status < 300) {
        return data;
    } else if (status === 400) {
        toast.error(data.message || 'Bad Request');
    } else if (status === 408) {
        toast.info('Update required! Please update to the latest version.');
    } else if (status === 411) {
        toast.info('Your account is not linked or activated!');
    } else {
        toast.error('Unknown error occurred! Please try again later.');
    }
    return null;
};

// Function to handle errors
const handleError = (error) => {
    toast.error('Error connecting to server! Try again later.');
    console.error('API Error:', error);
};

// Function to handle authorization
const setAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Function to reset user (logout and clear token)
const resetUser = () => {
    postRequest('/logout');
    removeItem('token');
    window.location.href = '/login'; // Redirect to login
};

// API methods
export const getRequest = async (url, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${url}`, { params });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const postRequest = async (url, body = {}) => {
    try {
        const response = await axios.post(`${BASE_URL}${url}`, body);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const putRequest = async (url, body = {}) => {
    try {
        const response = await axios.put(`${BASE_URL}${url}`, body);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const deleteRequest = async (url, params = {}) => {
    try {
        const response = await axios.delete(`${BASE_URL}${url}`, { params });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

// Function to set and load connection params
export const setConnectionParams = async (token) => {
    setAuthToken(token);
    setItem('token', token);
};

export const loadConnectionParams = async () => {
    const token = getItem('token');
    if (token) {
        setAuthToken(token);
        const test = await getRequest('notifications', { redirectIfAuthFail: false });
        return test !== null;
    }
    return false;
};
