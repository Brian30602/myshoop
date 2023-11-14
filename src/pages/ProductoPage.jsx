import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { ProductoContext } from '../context/ProductoContext';
import { primerMayuscula } from '../helper/helper';
import { Carousel } from 'react-bootstrap';
export const ProductoPage = () => {
	const { getProductoByID } = useContext(ProductoContext);

	const [loading, setLoading] = useState(true);
	const [producto, setProducto] = useState({});

	const { id } = useParams();

	const fetchProducto = async id => {
		const data = await getProductoByID(id);
		setProducto(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchProducto(id);
	}, []);

	return (
		<main className='container main-producto'>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-lg-5">
											<Carousel>
												{producto.images.map((img, index) => (
													<Carousel.Item>
														<img
															className="d-block w-100 rounded"
															src={img}
															alt="Primera imagen"
														/>
													</Carousel.Item>
												))}

											</Carousel>
										</div>
										<div className="col-lg-7 "> 
											<div className="ps-xl-3 mt-3 mt-xl-0">
												<a href="#" className="text-primary">{producto.category}</a>
												<h4 className="mb-3">{producto.title}</h4>

												<p className="mb-4"><a href="" className="text-muted"> Marcar : {producto.brand}</a></p>
												<h6 className="text-danger text-uppercase">{producto.discountPercentage} % Off</h6>
												<h4 className="mb-4">Precio : <span className="text-muted me-2"><del>${producto.price} USD</del></span> <b>${producto.price * (1.0 - producto.discountPercentage / 100)}
													USD</b></h4>
												<h4><span className="badge bg-soft-success text-success mb-4">{producto.stock} En Stock</span></h4>
												<p className="text-muted mb-4">{producto.description}</p>

												<form className="d-flex flex-wrap align-items-center mb-4">
													<label className="my-1 me-2" for="quantityinput">Cantidad</label>
													<div className="me-3">
														<select className="form-select my-1" id="quantityinput">
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
															<option value="7">7</option>
														</select>
													</div>
												</form>

												<div>
													<button type="button" className="btn btn-danger me-2"><i className="fas fa-heart"></i></button>
													<button type="button" className="btn btn-success waves-effect waves-light">
														<span className="btn-label"><i className="fas fa-plus"></i></span>Agregar al carrito</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	);
};
