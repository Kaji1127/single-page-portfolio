import React from 'react';

import styles from '../styles/Border.module.scss';

const Border = ({ footer, bottom }) => {
	if (footer) {
		return <div className={`${styles.border} ${styles['f-border']}`} />;
	}

	if (bottom) {
		return <div className={`${styles.border} ${styles['bottom-border']}`} />;
	}
	return <div className={styles.border} />;
};

export default Border;
