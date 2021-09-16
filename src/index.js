import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
// import App from './App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';
import CardList from './CardList';
ReactDOM.render(<CardList robots={robots}/> ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();