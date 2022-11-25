import React from 'react';
import { useForm } from 'react-hook-form';

import styles from '../styles/Contact.module.scss';
import Button from './Button';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const newName = data.name.trim();
		const updateMessage = data.message.trim();
		if (newName.length < 1 || updateMessage.length < 1) {
			alert('something error');
		} else {
			console.log({ ...data, name: newName, message: updateMessage });
		}
	};

	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<section className={styles.contact}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						className={`${styles['form-input']} ${
							errors.name && styles['border-error']
						}`}
						type="text"
						placeholder="NAME"
						{...register('name', {
							required: true,
						})}
					/>
					{errors.name && (
						<p className={styles.error}>Sorry, invalid format here</p>
					)}
				</div>
				<div>
					<input
						className={`${styles['form-input']} ${
							errors.email && styles['border-error']
						}`}
						type="email"
						placeholder="EMAIL"
						{...register('email', {
							required: true,
							pattern: reg,
						})}
					/>
					{errors.email && (
						<p className={styles.error}>Sorry, invalid format here</p>
					)}
				</div>
				<div>
					<textarea
						className={`${styles['form-input']} ${
							errors.message && styles['border-error']
						}`}
						placeholder="MESSAGE"
						{...register('message', { required: true })}
					></textarea>
					{errors.message && (
						<p className={styles.error}>Sorry, invalid format here</p>
					)}
				</div>
				<Button text="send message" />
			</form>
		</section>
	);
};

export default Contact;
