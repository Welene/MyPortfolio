import Section from '../components/Section';
import IconContainer from './IconContainer';

import EmblaCarousel from './EmblaCarousel';

import project1 from '../assets/projects/1.png';
import project2 from '../assets/projects/2.png';
// import project3 from '../assets/projects/3.png';
import project4 from '../assets/projects/4.png';
import project5 from '../assets/projects/5.png';
import project6 from '../assets/projects/6.png';
import project7 from '../assets/projects/1a.png';

import project8 from '../assets/projects/NovaTech1.png';
import project9 from '../assets/projects/NovaTech2.png';
import project10 from '../assets/projects/NovaTech3.png';

import projectA from '../assets/projects/a.png';
import projectB from '../assets/projects/b.png';
import projectC from '../assets/projects/c.png';
import projectD from '../assets/projects/d.png';
import projectE from '../assets/projects/admin1.png';
import projectF from '../assets/projects/admin2.png';
import projectG from '../assets/projects/admin3.png';
import projectI from '../assets/projects/admin5.png';
import projectJ from '../assets/projects/admin1b.png';

import { motion } from 'motion/react';
import BoinkName from './Boink';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

const projectPhotosPhone = [
	{
		src: project1,
		caption:
			'Evenemangsresor - en tjänst som erbjuder skräddarsydda resor för olika evenemang',
		alt: 'Bild av projekt 1',
	},
	{
		src: project2,
		caption: 'Beskrivning av projekt 2',
		alt: 'Bild av projekt 2',
	},
	// { src: project3, caption: 'Beskrivning av projekt 3', alt: 'Bild av projekt 3' },
	{
		src: project4,
		caption: 'Beskrivning av projekt 4',
		alt: 'Bild av projekt 4',
	},
	{
		src: project5,
		caption: 'Beskrivning av projekt 5',
		alt: 'Bild av projekt 5',
	},
	{
		src: project6,
		caption: 'Beskrivning av projekt 6',
		alt: 'Bild av projekt 6',
	},
	{
		src: project7,
		caption: 'Beskrivning av projekt 7',
		alt: 'Bild av projekt 7',
	},
	{
		src: project8,
		caption: 'NovaTech – översikt',
		alt: 'Bild av NovaTech – översikt',
	},
	{
		src: project9,
		caption: 'NovaTech – detaljvy',
		alt: 'Bild av NovaTech – detaljvy',
	},
	{
		src: project10,
		caption: 'NovaTech – funktion',
		alt: 'Bild av NovaTech – funktion',
	},
];

const projectPhotosDesktop = [
	{
		src: projectE,
		caption:
			'Praktik Värmlandstrafik: Evenemangsresor - en tjänst där resenärer kan förhandsboka resor för olika evenemang & administrator kan handtera bokningar, evenemang & resor (https://evenemangsresor.varmlandstrafik.se/ )',
		alt: 'Bild av Adminpanel – översikt',
	},
	{
		src: projectF,
		caption: 'Administrator kan söka upp kundens bokning & hantera dem',
		alt: 'Bild av Adminpanel – hantering',
	},
	{
		src: projectG,
		caption: 'Administrator kan redigera detaljer för resor',
		alt: 'Bild av Adminpanel – detaljvy',
	},
	{
		src: projectI,
		caption:
			'Administrator kan skapa evenemang samt redigera eller ta bort dem',
		alt: 'Bild av Adminpanel – funktion',
	},
	{
		src: projectJ,
		caption:
			'Översikt över alla evenemang som finns & som administrator kan hantera',
		alt: 'Bild av Adminpanel – vy',
	},
	{
		src: projectA,
		caption: 'Beskrivning av projekt A',
		alt: 'Bild av projekt A',
	},
	{
		src: projectB,
		caption: 'Beskrivning av projekt B',
		alt: 'Bild av projekt B',
	},
	{
		src: projectC,
		caption: 'Beskrivning av projekt C',
		alt: 'Bild av projekt C',
	},
	{
		src: projectD,
		caption: 'Beskrivning av projekt D',
		alt: 'Bild av projekt D',
	},
];

function Main() {
	return (
		<main className="mainContainer">
			{/* INTRO SECTION ----------------------------------------------------------------------------------------------------------------------------------------- */}

			<h1 className="intro_screen__title">
				<BoinkName />
			</h1>

			<motion.div
				className="intro-section__icons"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1.1 }}
				transition={{ duration: 3 }}
				viewport={{ once: true, amount: 0.1 }}>
				<IconContainer />
			</motion.div>

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
						title="Hej, trevligt att se dig här!"
						text={
							<>
								Jag är en norskinflyttad tjej som har bott i
								Sverige i några år.
								<Spacer height="1rem" />
								Som en kreativ själ bestämde jag mig för att
								börja plugga webbutveckling på
								Folkuniversitetet, ett val som var 100% rätt!
								Efter två år blev jag klar med utbildningen
								(2026).
								<Spacer height="1rem" />
								Jag är en positiv & glad person som gillar att
								sprida glädje.
								<Spacer height="1rem" />
								Kanske får jag chansen att skapa något &
								utvecklas vidare hos er, det skulle vara både
								ett nöje & en ära!
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
							Utbildningen är praktisk inriktad, jag har lärt mig
							genom att göra, genom individuella- & teamprojekter.
							Det har gett mig verklig, användbar erfarenhet &
							utvecklat mig mycket, inte minst inom agilt arbete.
							<Spacer height="1rem" />
							Nedan kan du se exempel på projekt jag har arbetat
							med under utbildningen.
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
							<motion.h3
								className="other-section__heading"
								style={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
								}}
								initial={{ width: 0 }}
								whileInView={{ width: '6ch' }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.7, ease: 'linear' }}>
								Annat
							</motion.h3>
						</article>

						<figure className="icon-container__other">
							<div className="icon-item">
								<a
									href="https://github.com/welene"
									target="_blank">
									<lord-icon
										src="./animated/git-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Besök min Github!
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://moisaart.picflow.com/59p9zhzt82"
									target="_blank">
									<lord-icon
										src="./animated/draw-ani.json"
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
										src="./animated/photo-ani.json"
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
							<motion.h3
								className="contact-section__heading"
								style={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
								}}
								initial={{ width: 0 }}
								whileInView={{ width: '7ch' }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.7, ease: 'linear' }}>
								Kontakt
							</motion.h3>
							<p className="contact-section__txt">
								Hör gärna av dig till mig:
							</p>
						</article>

						<figure className="icon-container__contact">
							<div className="icon-item">
								<a href="mailto:helenetheo@live.no">
									<lord-icon
										src="./animated/email-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Mejl
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://www.instagram.com/helenetheodorsen/"
									target="_blank">
									<lord-icon
										src="./animated/inst-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									Instagram
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://www.linkedin.com/in/helene-theodorsen-645a20311/"
									target="_blank">
									<lord-icon
										src="./animated/link-ani.json"
										trigger="hover"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									LinkedIn
								</p>
							</div>
						</figure>
					</motion.div>
				</div>
			</section>
		</main>
	);
}

export default Main;
