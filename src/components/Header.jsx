import React from 'react';

import styles from '../styles/Header.module.scss';
import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as FemIcon } from '../assets/icon-frontend-mentor.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icon-linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icon-twitter.svg';

const Header = () => {
	return (
		<header className={`${styles.header} container`}>
			<div className={styles.content}>
				<h1>adamkeyes</h1>
				<div className={styles.icons}>
					<GithubIcon className={styles['icons-github']} alt="github icon" />

					<FemIcon className={styles['icons-fem']} alt="frontend-mentor icon" />
					<LinkedinIcon
						className={styles['icons-linkedin']}
						alt="linkedin icon"
					/>
					<TwitterIcon className={styles['icons-twitter']} alt="twitter icon" />
				</div>
			</div>
		</header>
	);
};

export default Header;
