import axios from "axios";
const baseURL = 'http://localhost:3001/persons'
const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = (id, newPerson) => {
    const request = axios.put(baseURL, newPerson)
}

const deletePerson = (id, newPerson) => {
    const request = axios.put(baseURL, newPerson)
}