import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainContent } from '../MainContent/MainContent';
import { MainMenu } from '../MainMenu/MainMenu';
import { TopBar } from '../TopBar/TopBar';
import { CartContext } from '../../contexts/CartContext';

export const Layout = () => {
	const [cartItems, setCartItems] = useState(() => {
		return localStorage['cart_products']
			? JSON.parse(localStorage['cart_products'])
			: [];
	});

	const addProductToCart = product => {
		setCartItems(previousCartItems => {
			const newState = [...previousCartItems, product];

			localStorage['cart_products'] = JSON.stringify(newState);
			return newState;
		});
	};

	return (
		<>
			<CartContext.Provider value={[cartItems, addProductToCart]}>
				<MainContent>
					<TopBar>
						<MainMenu />
						<Logo />
						<span>
							<IconMenu />
						</span>
					</TopBar>
					<CategoryMenu />
					<Outlet />
				</MainContent>
				<Footer />
			</CartContext.Provider>
		</>
	);
};
