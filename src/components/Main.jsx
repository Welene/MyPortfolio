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
import { ExternalLink } from 'lucide-react';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

const projectPhotosPhone = [
	{
		src: project1,
		caption: 'Examinationsprojekt: app för matbeställning',
		alt: 'App för matbeställning',
	},
	{
		src: project2,
		caption: 'Examinationsprojekt: meny - lägga till, ta bort & sortera',
		alt: 'Meny - lägga till, ta bort & sortera',
	},
	// { src: project3, caption: 'Beskrivning av projekt 3', alt: 'Bild av projekt 3' },
	{
		src: project4,
		caption: 'Examinationsprojekt: menyval i appen',
		alt: 'Menyval i appen',
	},
	{
		src: project5,
		caption: 'Examinationsprojekt: bekräftelse av beställning',
		alt: 'Bekräftelse av beställning',
	},
	{
		src: project6,
		caption: 'Examinationsprojekt: kvitto av beställning',
		alt: 'Kvitto av beställning',
	},
	{
		src: project7,
		caption: 'Examinationsprojekt: första React-projekt',
		alt: 'Första React projekt',
	},
	{
		src: project8,
		caption:
			'Examinationsprojekt (1 vecka):  - göra en egen AI-bot som svarar utifrån egen kontext',
		alt: 'AI-bot som svarar utifrån egen kontext',
	},
	{
		src: project9,
		caption: 'Examinationsprojekt: svarar utifrån kontexten den har fått',
		alt: 'Svarar utifrån kontexten',
	},
	{
		src: project10,
		caption: 'Examinationsprojekt: AI-bot med minne',
		alt: 'AI-bot med minne',
	},
];

const projectPhotosDesktop = [
	{
		src: projectE,
		caption: (
			<>
				Praktik Värmlandstrafik:{' '}
				<a
					href="https://evenemangsresor.varmlandstrafik.se/"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: '4px',
						color: 'inherit',
					}}>
					Evenemangsresor
					<ExternalLink size={14} aria-hidden="true" />
				</a>{' '}
				- en tjänst där resenärer kan förhandsboka resor för evenemang &
				administratör kan hantera bokningar, evenemang & resor
			</>
		),
		alt: 'Adminpanel – översikt',
	},
	{
		src: projectF,
		caption:
			'Praktik Värmlandstrafik: Evenemangsresor - administratör kan söka upp kundernas bokningar & hantera dem',
		alt: 'Adminpanel – söka efter & hantera bokningar',
	},
	{
		src: projectG,
		caption:
			'Praktik Värmlandstrafik: Evenemangsresor - administratör kan redigera detaljer för resor',
		alt: 'Adminpanel – redigera resor',
	},
	{
		src: projectI,
		caption:
			'Praktik Värmlandstrafik: Evenemangsresor - administratör kan skapa evenemang samt redigera eller ta bort dem',
		alt: 'Adminpanel – skapa/redigera evenemang',
	},
	{
		src: projectJ,
		caption:
			'Praktik Värmlandstrafik: Evenemangsresor - översikt över alla evenemang som finns & som administratör kan hantera',
		alt: 'Adminpanel – översikt över evenemang',
	},
	{
		src: projectA,
		caption:
			'Examinationsprojekt: filmdatabas - sök efter filmer, läs detaljer, lägg till i din favoritlista & se trailer',
		alt: 'Filmdatabas med sökfunktion, detaljer, favoritlista & trailer',
	},
	{
		src: projectB,
		caption: 'Examinationsprojekt: filmdatabas - sökresultat',
		alt: 'Sökresultat med filmer',
	},
	{
		src: projectC,
		caption: 'Examinationsprojekt: filmdatabas - personlig favoritlista',
		alt: 'Personlig favoritlista',
	},
	{
		src: projectD,
		caption: 'Examinationsprojekt: filmdatabas - detaljer för vald film',
		alt: 'Detaljer av vald film',
	},
];

function Main() {
	return (
		<main className="mainContainer">
			{/* INTRO SECTION ----------------------------------------------------------------------------------------------------------------------------------------- */}

			<BoinkName />

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
