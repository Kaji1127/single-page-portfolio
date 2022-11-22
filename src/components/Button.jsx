import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({ text = 'contact me' }) => {
	return (
		<div className={styles.button}>
			<a href="/">{text}</a>
		</div>
	);
};

export default Button;
