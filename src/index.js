import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/fonts/ui_icon.css';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';


let store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
