import React from 'react';
import Hero from './components/Hero';
import Form from './components/Form';

function App() {
	// const refContainer = useRef(null);

	/* const windowResize = () => {
		const height = window.innerHeight;
		refContainer.current.style.height = `${height}px`;
	}; */

	/* 	useEffect(() => {
		windowResize();

		window.addEventListener('resize', windowResize);
		return () => {
			window.removeEventListener('resize', windowResize);
		};
	}, []); */

	return (
		<div className="container">
			<div className="container-wrapper">
				<Hero />
				<Form />
			</div>
		</div>
	);
}

export default App;
