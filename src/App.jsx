import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

import { Container, Header } from './components';

export const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Header />
				<AppRoutes />
			</Container>
		</BrowserRouter>
	);
};
