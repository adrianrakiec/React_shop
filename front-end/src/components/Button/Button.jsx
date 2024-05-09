import styles from './Button.module.css';

export const Button = ({ children, onClick, isBlack }) => {
	return (
		<button
			className={`${styles.button} ${isBlack ? styles.black : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
