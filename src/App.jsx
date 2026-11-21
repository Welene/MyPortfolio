// import Main from './components/Main';
import Stars from './components/Stars';
import Top from './components/Arrow/Arrow';
import { MotionConfig } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
	return (
		<MotionConfig reducedMotion="user">
			<header id="intro" className="intro_screen"></header>
			<div className="parallax_wrapper">
				<Stars count={700} />

				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
					</Route>
				</Routes>
			</div>

			<footer id="outro" className="outro_screen">
				<p className="outro_screen-txt">© 2026 Helene Theodorsen</p>
			</footer>
			<Top />
		</MotionConfig>
	);
}

export default App;
