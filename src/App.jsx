import React from 'react';

import Header from './components/Header';
import KV from './components/KV';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './styles/App.scss';
import Contact from './components/Contact';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<KV />
				<Skills />
				<Projects />
			</main>
			<Footer />
		</>
	);
};

export default App;
