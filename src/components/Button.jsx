import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({
	text = 'contact me',
	projectUrl,
	sourceCodeUrl,
	onScroll,
	scrollRef,
}) => {
	if (text === 'view project') {
		return (
			<div className={styles.button}>
				<a className={styles.btn} href={projectUrl} target="_blank">
					{text}
				</a>
			</div>
		);
	}

	if (text === 'view code') {
		return (
			<div className={styles.button}>
				<a className={styles.btn} href={sourceCodeUrl} target="_blank">
					{text}
				</a>
			</div>
		);
	}

	if (text === 'send message') {
		return (
			<div className={styles.button}>
				<button type="submit" className={styles.btn}>
					{text}
				</button>
			</div>
		);
	}

	return (
		<div className={styles.button}>
			<button className={styles.btn} onClick={() => onScroll(scrollRef)}>
				{text}
			</button>
		</div>
	);
};

export default Button;
