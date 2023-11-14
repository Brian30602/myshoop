import React, { useContext } from 'react';
import { ProductoList } from '../components';
import { ProductoContext } from '../context/ProductoContext';

export const HomePage = () => {

	const { onClickLoadMore, active, setActive } = useContext(ProductoContext)

	return (
		<>
			<div className="container">
				<div className="row"><ProductoList /></div>
			</div>
		</>
	);
};
