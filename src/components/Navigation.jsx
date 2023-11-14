import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ProductoContext } from '../context/ProductoContext';

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(ProductoContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	const navstyle = {
		background: 'linear-gradient(45deg, #6456d8, #921616)',
	};


	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary" style={navstyle} data-bs-theme="dark">
				<div className="container-fluid">
					<Link to='/' className="navbar-brand">
						<img width={50} height={50} className='logo'
							src='https://cdn-icons-png.flaticon.com/512/10004/10004837.png'
						/> MyShopp
					</Link>



					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarColor01">
						<ul className="navbar-nav me-auto">
							<li class="nav-item active">
								<Link to='/home' className="nav-link" href="#">Inicio <span class="sr-only">(current)</span></Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container p-2">
				<form onSubmit={onSearchSubmit}>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-5">
							<div className='form-group text-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='icon-search'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
									/>
								</svg>
								<input style={{ width: '100%', backgroundColor: 'transparent' }}
									type='search'
									name='valueSearch'
									id=''
									value={valueSearch}
									onChange={onInputChange}
									placeholder='Buscar nombre de producto'
								/>
							</div>
						</div>
						<div className="col-4">
							<button className='btn-search btn-danger'><i className="fas fa-search"></i> Buscar</button>
						</div>
					</div>
				</form>
			</div>

			<Outlet />
		</>
	);
};
