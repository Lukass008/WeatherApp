import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './store';

var app = document.getElementById('app');

//render Layout in div with id 'app'
ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>
	, app);
