import Section from '../components/Section';
import IconContainer from './IconContainer';

// import Email from '../assets/contact/email.png';
// import Instagram from '../assets/contact/instagram.png';
// import Linkedin from '../assets/contact/linkedin.png';

// import gitIcon from '../assets/icons/github.png';
// import Photo from '../assets/icons/photo.png';
// import Draw from '../assets/icons/draw.png';

import EmblaCarousel from './EmblaCarousel';

import project1 from '../assets/projects/1.png';
import project2 from '../assets/projects/2.png';
import project3 from '../assets/projects/3.png';
import project4 from '../assets/projects/4.png';
import project5 from '../assets/projects/5.png';
import project6 from '../assets/projects/6.png';
import project7 from '../assets/projects/1a.png';

import projectA from '../assets/projects/a.png';
import projectB from '../assets/projects/b.png';
import projectC from '../assets/projects/c.png';
import projectD from '../assets/projects/d.png';

import { motion } from 'motion/react';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

const projectPhotosPhone = [
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	project7,
];

const projectPhotosDesktop = [projectA, projectB, projectC, projectD];

function Main() {
	return (
		<main className="mainContainer">
			{/* INTRO SECTION ----------------------------------------------------------------------------------------------------------------------------------------- */}
			<div className="intro-section__icons">
				<IconContainer />
			</div>
			<section className="intro-section">
				<motion.div
					className="top_layer"
					style={{ position: 'relative' }}
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { duration: 1 },
						scale: 1.1,
					}}
					viewport={{ once: true, amount: 0.1 }}>
					<Section
						title="Hej! va trevligt att se dig här"
						text={
							<>
								Jag är en norskinflyttad tjej som har bott i
								Sverige i några år.
								<Spacer height="1rem" />
								Som en kreativ själ bestämde jag mig för att
								börja på Frontendutbildningen hösten 2024, ett
								val som var 100% rätt!
								<Spacer height="1rem" />
								Jag är en positiv & glad person som gillar att
								sprida glädje.
								<Spacer height="1rem" />
								Kanske får jag chansen att skapa något &
								utvecklas vidare hos er, det skulle vara både en
								ära & en glädje!
							</>
						}
					/>
				</motion.div>
			</section>

			{/* PROJECTS SECTION----------------------------------------------------------------------------------------------------------------------------------------- */}
			<motion.div
				className="parallax_group project-section"
				style={{ position: 'relative' }}
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { duration: 1 },
					scale: 1.1,
				}}
				viewport={{ once: true, amount: 0.1 }}>
				<Section
					title="Projekter"
					text={
						<>
							Nedan kan du se exempel på projekt jag har arbetat
							med under utbildningen. Jag har fått arbeta både
							självständigt & i team.
							<Spacer height="1rem" />
							Vi har lagt mycket fokus på teamarbete, vilket har
							gjort att jag utvecklats mycket & lärt mig att bli
							ett ännu bättre på agilt arbete!
						</>
					}
				/>
			</motion.div>
			<motion.div
				className="mid_layer--over"
				style={{ position: 'relative' }}
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { duration: 1 },
					scale: 1.1,
				}}
				viewport={{ once: true, amount: 0.1 }}>
				<EmblaCarousel
					slides={projectPhotosDesktop}
					className="embla-desktop"
				/>
			</motion.div>
			<motion.div
				className="mid_layer--under"
				style={{ position: 'relative' }}
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { duration: 1 },
					scale: 1.1,
				}}
				viewport={{ once: true, amount: 0.1 }}>
				<EmblaCarousel
					slides={projectPhotosPhone}
					className="embla-phone"
				/>
			</motion.div>

			{/* CONTACT/INFO SECTION -----------------------------------------------------------------------------------------------------------------------------------------  */}
			<section className="parallax_group">
				<div className="mid_layer">
					<motion.div
						className="other-section"
						style={{ position: 'relative' }}
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: { duration: 1 },
							scale: 1.1,
						}}
						viewport={{ once: true, amount: 0.1 }}>
						<article className="other-section__content">
							<h3 className="other-section__heading">Annat</h3>
						</article>

						<figure className="icon-container__other">
							<div className="icon-item">
								<a
									href="https://github.com/welene"
									target="_blank">
									<lord-icon
										src="/Portfolio/animated/git-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Besök mig @Github!
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://moisaart.picflow.com/59p9zhzt82"
									target="_blank">
									<lord-icon
										src="/Portfolio/animated/draw-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Kolla min artwork!
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://moisaart.picflow.com/xs2ltt0twg"
									target="_blank">
									<lord-icon
										src="/Portfolio/animated/photo-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Eller mina foto!
								</p>
							</div>
						</figure>
					</motion.div>

					<motion.div
						className="contact-section"
						style={{ position: 'relative' }}
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: { duration: 1 },
							scale: 1.1,
						}}
						viewport={{ once: true, amount: 0.1 }}>
						<article className="contact-section__content">
							<h3 className="contact-section__heading">
								Kontakt
							</h3>
							<p className="contact-section__txt">
								Hör gärna av dig till mig:
							</p>
						</article>

						<figure className="icon-container__contact">
							<a href="mailto:yourname@email.com">
								<lord-icon
									src="/Portfolio/animated/email-ani.json"
									trigger="hover"
									style={{
										width: '70px',
										height: '70px',
									}}></lord-icon>
							</a>

							<a
								href="https://www.instagram.com/helenetheodorsen/"
								target="_blank">
								<lord-icon
									src="/Portfolio/animated/inst-ani.json"
									trigger="hover"
									style={{
										width: '70px',
										height: '70px',
									}}></lord-icon>
							</a>

							<a
								href="https://www.linkedin.com/in/helene-theodorsen-645a20311/"
								target="_blank">
								<lord-icon
									src="/Portfolio/animated/link-ani.json"
									trigger="hover"
									style={{
										width: '70px',
										height: '70px',
									}}></lord-icon>
							</a>
						</figure>
					</motion.div>
				</div>
			</section>
		</main>
	);
}

export default Main;
