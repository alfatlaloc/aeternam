import { handleResponse, handleError } from "./apiUtils";

require('dotenv').config();

const baseUrl = process.env.REACT_APP_SERVER_URL;

export function getPerYear() {
    console.log(baseUrl + '/Year');
    return fetch(baseUrl + '/Year')
        .then(handleResponse)
        .catch(handleError);
}


export function getPerMonth() {
    console.log(baseUrl + '/Month');
    return fetch(baseUrl + '/Month')
        .then(handleResponse)
        .catch(handleError);
}

export function getMonthsPerYear() {
    console.log(baseUrl + '/Month/PerYear');
    return fetch(baseUrl + '/Month/PerYear')
        .then(handleResponse)
        .catch(handleError);
}