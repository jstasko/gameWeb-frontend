import axios from "axios";

export function setToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export function api(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path,data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                return reject(err.response.data.error);
            })
    });
}