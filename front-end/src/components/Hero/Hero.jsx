import { Wrapper } from '../Wrapper/Wrapper';
import { Button } from '../Button/Button';
import styles from './Hero.module.css';

export const Hero = ({ heroImg }) => {
	return (
		<div className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
			<Wrapper>
				<div className={styles.contentWrapper}>
					<h2>Letnie promocje do -70%</h2>
					<p>Tylko najlepsze okazje</p>
					<Button>Sprawdź produkty</Button>
				</div>
			</Wrapper>
		</div>
	);
};
