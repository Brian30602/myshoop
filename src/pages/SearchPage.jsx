import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardProducto } from '../components';
import { ProductoContext } from '../context/ProductoContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalProductos } = useContext(ProductoContext);
	let filteredProductos = [];
	if (location.state !== null) {
		filteredProductos = globalProductos.filter(producto => {
			const regex = new RegExp(location.state, 'i');
			return regex.test(producto.title);
		});
	} else {
		filteredProductos = globalProductos;
	}

	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredProductos.length}</span>{' '}
				resultados:
			</p>
			<div className='row'>
				{filteredProductos.map(producto => (
					<CardProducto producto={producto} key={producto.id} />
				))}
			</div>
		</div>
	);
};
