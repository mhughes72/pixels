import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-modal/styles.css';


// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.defaults.baseURL = "https://api.500px.com/v1/photos";

// axios.defaults.params['feature'] = 'popular';
// axios.defaults.params['consumer_key'] = 'P7LLhKkPAnPUpbfAXk3Jq2iDjYmCx87zgfEDxQVS';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['crossorigin'] = true;
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
