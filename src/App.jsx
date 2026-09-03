import Main from './components/Main';
import React from 'react';
import Stars from './components/Stars';
import Top from './components/Arrow/Arrow';
// import BoinkName from './components/Boink';

function App() {
	return (
		<>
			<header id="intro" className="intro_screen">
				{/* <h1 className="intro_screen__title">
					<BoinkName />
				</h1> */}
			</header>
			<div className="parallax_wrapper">
				<Stars count={700} />

				<Main />
			</div>

			<footer id="outro" className="outro_screen">
				<p className="outro_screen-txt">© 2025 Helene Theodorsen</p>
			</footer>
			<Top />
		</>
	);
}

export default App;
