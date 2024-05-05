import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './FavouritesList.module.css';

export const FavouritesList = ({ products }) => {
	return (
		<Wrapper>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map(product => (
						<FavouriteProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</Wrapper>
	);
};
