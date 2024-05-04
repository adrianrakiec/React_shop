import { Product } from '../Product/Product';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Bestsellers.module.css';

export const Bestsellers = ({ products }) => {
	return (
		<Wrapper>
			<h2 className={styles.bestsellersHeader}>Sprawdź nasze bestsellery</h2>
			<div className={styles.productsWrapper}>
				{products.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Wrapper>
	);
};
