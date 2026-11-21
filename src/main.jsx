import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

defineElement(lottie.loadAnimation);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
