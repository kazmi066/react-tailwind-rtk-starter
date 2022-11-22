import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './components/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

reportWebVitals();
