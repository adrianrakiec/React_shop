import { CartProduct } from '../CartProduct/CartProduct';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './CartProductsList.module.css';

export const CartProductsList = ({ products }) => {
	return (
		<Wrapper>
			<div className={styles.cartList}>
				<h2>Koszyk</h2>
				<div>
					{products.map(product => (
						<CartProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</Wrapper>
	);
};
