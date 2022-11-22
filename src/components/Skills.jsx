import React from 'react';
import skillData from '../assets/data/skills.json';

import RingsImage from '../assets/pattern-rings.svg';

import styles from '../styles/Skills.module.scss';

const Skills = () => {
	return (
		<section className={`${styles.skills}`}>
			<img className={styles.rings} src={RingsImage} alt="rings" />
			<div className={styles.container}>
				<div className={styles.border} />
				<div className={styles.content}>
					{skillData.map((skill) => (
						<div key={skill.id} className={styles.skill}>
							<h2>{skill.name}</h2>
							<p>{skill.experience} Years Experience</p>
						</div>
					))}
				</div>
				<div className={`${styles.border} ${styles['bottom-border']}`} />
			</div>
		</section>
	);
};

export default Skills;
