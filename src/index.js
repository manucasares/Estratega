import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { MainApp } from './MainApp';

import './styles/styles.scss';


ReactDOM.render(
    <Provider store={store} >
        <MainApp />
    </Provider>,
  document.getElementById('root')
);

