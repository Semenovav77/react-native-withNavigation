import axios from 'axios';

export const tasksAPI = {
    getTasks() {
        return axios.get('https://trycode.pw/c/E4HSF.json').then(data => data.data)
    }
};