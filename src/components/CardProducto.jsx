import React from 'react';
import { Link } from 'react-router-dom';

export const CardProducto = ({ producto }) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-12">
			<div className="card product-box">
				<div className="card-body">
					<div className="bg-light">
						<img src={producto.thumbnail} alt={`Producto ${producto.description}`} className="img-fluid" />
					</div>
					<div className="product-info">
						<div className="row align-items-center">
							<div className="col">
								<h1 className="font-20 mt-0 sp-line-1"><Link to={`/producto/${producto.id}`} className="text-dark">{producto.title}</Link> </h1>
								<div className="text-warning mb-2 font-13">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<h5 className="m-0"> <span className="text-muted"> Stocks : {producto.stock}pz</span></h5>
							</div>
							<div className="col-auto">
								<div className="product-price-tag">
									${producto.price}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	);
};
