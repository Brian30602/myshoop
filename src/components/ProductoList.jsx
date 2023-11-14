import React, { useContext } from 'react';
import { ProductoContext } from '../context/ProductoContext';
import { CardProducto } from './CardProducto';
import { Loader } from './Loader';

export const ProductoList = () => {
	const { allProductos, loading, filteredProductos } =
		useContext(ProductoContext);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='row '>
					{filteredProductos.length ? (
						<>
							{filteredProductos.map(producto => (
								<CardProducto producto={producto} key={producto.id} />
							))}
						</>
					) : (
						<>
							{allProductos.map(producto => (
								<CardProducto producto={producto} key={producto.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};
