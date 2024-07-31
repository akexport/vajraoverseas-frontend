import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/customers';

export const listCustomers = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createCustomer = (customer) => {
    return axios.post(REST_API_BASE_URL, customer);
}

export const createContact = (contact) => {
    return axios.post(REST_API_BASE_URL, contact);
}