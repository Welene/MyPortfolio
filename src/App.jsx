import Main from './components/Main';
import Stars from './components/Stars';
import Top from './components/Arrow/Arrow';

function App() {
	return (
		<>
			<header id="intro" className="intro_screen"></header>
			<div className="parallax_wrapper">
				<Stars count={700} />

				<Main />
			</div>

			<footer id="outro" className="outro_screen">
				<p className="outro_screen-txt">© 2026 Helene Theodorsen</p>
			</footer>
			<Top />
		</>
	);
}

export default App;
