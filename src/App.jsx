import Main from './components/Main';
import React from 'react';
import Stars from './components/Stars';
import Top from './components/Arrow/Arrow';

function App() {
	return (
		<>
			<header id="intro" className="intro_screen">
				<h1 class="intro_screen__title">
					<span class="swoosh-text">
						Helene Theodorsens portfolio
					</span>
				</h1>
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
