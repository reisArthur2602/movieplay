import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Details, Home, Favorites } from '../components/Pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/filme/:id" element={<Details />} />
			<Route path="/favoritos" element={<Favorites />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
};
