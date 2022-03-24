import React from 'react';
import ReactDOM from'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//import './styles.css';

import { App } from './app';


const divRoot = document.querySelector('#root');



ReactDOM.render(
    <App/>
, divRoot);

