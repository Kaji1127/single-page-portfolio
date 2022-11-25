import React from 'react';

import styles from '../styles/Projects.module.scss';
import Button from './Button';

import ProjectsData from '../assets/data/projects.json';

const Projects = ({ scrollRef, onScroll }) => {
	return (
		<section className={`${styles.projects} container`}>
			<div className={styles.title}>
				<h2>Projects</h2>
				<Button scrollRef={scrollRef} onScroll={onScroll} />
			</div>
			<div className={styles.content}>
				{ProjectsData.map((project) => (
					<div key={project.id} className={styles.project}>
						<div className={styles.image}>
							<picture>
								<source
									media="(min-width: 62em)"
									srcSet={project.thumbnail.large}
								/>
								<img src={project.thumbnail.small} alt={project.title} />
							</picture>
							<div className={styles['image-buttons']}>
								<Button text="view project" projectUrl={project.projectUrl} />
								<Button
									text="view code"
									sourceCodeUrl={project.sourceCodeUrl}
								/>
							</div>
						</div>
						<div className={styles.text}>
							<h3>{project.title}</h3>
							<div className={styles.skill}>
								{project.skills.map((skill, index) => (
									<p key={index}>{skill}</p>
								))}
							</div>
						</div>
						<div className={styles.buttons}>
							<Button text="view project" />
							<Button text="view code" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
