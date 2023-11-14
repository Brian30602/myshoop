import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { ProductoContext } from './ProductoContext';

export const ProductoProvider = ({ children }) => {
	const [allProductos, setAllProductos] = useState([]);
	const [globalProductos, setGlobalProductos] = useState([]);
	const [offset, setOffset] = useState(0);

	// Utilizar CustomHook - useForm
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

	// Estados para la aplicación simples
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

	// lLamar 50 productoes a la API
	const getAllProductos = async (limit = 50) => {
		const res = await fetch(`http://idgs1003.infinityfreeapp.com/apirest/productos.php`, {
			mode: 'cors',
		});
		const data = await res.json();
		setAllProductos([...allProductos, ...data]);
		setLoading(false);
	};

	// Llamar todos los productoes
	const getGlobalProductos = async () => {
		const baseURL = '';
		const res = await fetch(`http://idgs1003.infinityfreeapp.com/apirest/productos.php`, {
			mode: 'cors',
		});
		const results = await res.json();
		setGlobalProductos(results);
		setLoading(false);
	};

	// Llamar a un producto por ID
	const getProductoByID = async id => {
		const baseURL = 'http://idgs1003.infinityfreeapp.com/apirest/productos.php';
		const res = await fetch(`${baseURL}?id=${id}`, {
			mode: 'cors',
		});
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		getAllProductos();
	}, [offset]);

	useEffect(() => {
		getGlobalProductos();
	}, []);

	// BTN CARGAR MÁS
	const onClickLoadMore = () => {
		setOffset(offset + 50);
	};

	// Filter Function + State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredProductos, setfilteredProductos] = useState([]);

	const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			const filteredResults = globalProductos.filter(producto =>
				producto.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredProductos([...filteredProductos, ...filteredResults]);
		} else {
			const filteredResults = filteredProductos.filter(
				producto =>
					!producto.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredProductos([...filteredResults]);
		}
	};

	return (
		<ProductoContext.Provider
			value={{
				valueSearch,
				onInputChange,
				onResetForm,
				allProductos,
				globalProductos,
				getProductoByID,
				onClickLoadMore,
				// Loader
				loading,
				setLoading,
				// Btn Filter
				active,
				setActive,
				// Filter Container Checkbox
				handleCheckbox,
				filteredProductos,
			}}
		>
			{children}
		</ProductoContext.Provider>
	);
};
