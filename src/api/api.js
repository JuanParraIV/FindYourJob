import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com/',
  headers: {
    //'X-RapidAPI-Key': '9830047fa4mshf5cebb5a9c546d1p127eb6jsn3b2307eb1cf5',
    'X-RapidAPI-Key': '4225c099damsh10e75c0cf43bb88p12a0d6jsnf1b8761f937b',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
});

export default api;
