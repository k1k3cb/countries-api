import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../layouts/Layout';
import CountryDetails from '../pages/country-details/CountryDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/country/:country' element={<CountryDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
