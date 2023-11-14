import { AppRouter } from './AppRouter';
import { ProductoProvider } from './context/ProductoProvider';

function App() {
	return (
		<ProductoProvider>
			<AppRouter />
		</ProductoProvider>
	);
}

export default App;
