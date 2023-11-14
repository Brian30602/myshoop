import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ProductoContext } from '../context/ProductoContext';

export const Home = () => {
    const { onInputChange, valueSearch, onResetForm } =
        useContext(ProductoContext);

    const navigate = useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('/search', {
            state: valueSearch,
        });

        onResetForm();
    }; const bodyStyle = {
        background: 'linear-gradient(45deg, #6456d8, #921616)',
        width: '100%',
        height: '100vh',
    };


    return (
        <>
            <body style={bodyStyle}>

                <div className="w-100" >
                    <div className="container mt-5"  >
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center text-white">Bienvenido a la tienda <br /></h1>
                                <h1 className='text-center  mb-5  text-white'> <img width={150} height={150} className='logo'
                                    src='https://cdn-icons-png.flaticon.com/512/10004/10004837.png'
                                /> MyShopp</h1>
                            </div>
                        </div>
                        <form onSubmit={onSearchSubmit}>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-5">
                                    <div className='form-group text-center' style={{ background: 'white' }}>
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
                                        <input style={{ width: '100%' }}
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
                                    <button className='btn-search '><i className="fas fa-search"></i> Buscar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </>
    );
};
