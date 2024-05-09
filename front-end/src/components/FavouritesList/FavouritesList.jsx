import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './FavouritesList.module.css';

export const FavouritesList = ({ favourites }) => {
	return (
		<Wrapper>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{favourites.map(favourite => {
						return (
							<FavouriteProduct key={favourite.id} favourite={favourite} />
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};
