import { Product } from '../Product/Product';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Products.module.css';

export const Products = ({ products, headerText }) => {
	return (
		<Wrapper>
			<h2 className={styles.ProductsHeader}>{headerText}</h2>
			<div className={styles.productsWrapper}>
				{products.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Wrapper>
	);
};
