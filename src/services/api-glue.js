import axios from 'axios'

// Constant URL value for API
const API_URL = 'http://localhost:8000/api';


const api = {
    getGithubMapbox: () => {
        return axios.get('https://api.github.com/users/mapbox')
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            });
    },
    getLaravel: (id) => {
        return axios.get(`${API_URL}/user/${id}`)
            .then((response) => {
                console.log(response);
            });
    }
}

export {api};