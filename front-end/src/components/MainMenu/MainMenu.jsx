import styles from './MainMenu.module.css';
import { NavLink } from 'react-router-dom';
import { GENDERS } from '../../constants/categories';

export const MainMenu = () => {
	return (
		<ul className={styles.mainMenu}>
			{GENDERS.map(category => (
				<li key={category.path}>
					<NavLink to={category.path}>{category.categoryName}</NavLink>
				</li>
			))}
		</ul>
	);
};
