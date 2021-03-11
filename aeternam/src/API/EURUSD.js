import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = process.env.REACT_APP_SERVER_URL + '/Year';

export function getPerYear() {
    console.log(baseUrl);
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}