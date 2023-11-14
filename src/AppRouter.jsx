import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, ProductoPage, SearchPage } from './pages';
import { Home } from './pages/Home';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='producto/:id' element={<ProductoPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>
			<Route path='home' element={<Home />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
