import Section from '../components/Section';
import IconContainer from './IconContainer';

import EmblaCarousel from './EmblaCarousel';
import LanguageSwitcher from './LanguageSwitcher';

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
import { useTranslation } from 'react-i18next';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

function Main() {
	const { t } = useTranslation();

	// Hjelpefunksjon: gir {src, caption, alt} fra en nøkkel i JSON-filene
	const slide = (src, key) => ({
		src,
		caption: t(`${key}.caption`),
		alt: t(`${key}.alt`),
	});

	const projectPhotosPhone = [
		slide(project1, 'projects.phone.order'),
		slide(project2, 'projects.phone.menu'),
		// slide(project3, 'projects.phone.xxx'),
		slide(project4, 'projects.phone.menuChoice'),
		slide(project5, 'projects.phone.confirm'),
		slide(project6, 'projects.phone.receipt'),
		slide(project7, 'projects.phone.firstReact'),
		slide(project8, 'projects.phone.aiBot'),
		slide(project9, 'projects.phone.aiContext'),
		slide(project10, 'projects.phone.aiMemory'),
	];

	const projectPhotosDesktop = [
		{
			src: projectE,
			caption: (
				<>
					{t('projects.desktop.admin.captionPrefix')}{' '}
					<a
						className="caption__link"
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
					{t('projects.desktop.admin.captionSuffix')}
				</>
			),
			alt: t('projects.desktop.admin.alt'),
		},
		slide(projectF, 'projects.desktop.adminSearch'),
		slide(projectG, 'projects.desktop.adminEdit'),
		slide(projectI, 'projects.desktop.adminCreate'),
		slide(projectJ, 'projects.desktop.adminEvents'),
		slide(projectA, 'projects.desktop.movies'),
		slide(projectB, 'projects.desktop.movieResults'),
		slide(projectC, 'projects.desktop.movieFavs'),
		slide(projectD, 'projects.desktop.movieDetails'),
	];

	return (
		<main className="mainContainer">
			{/* INTRO SECTION ----------------------------------------------------------------------------------------------------------------------------------------- */}

			<LanguageSwitcher />

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
						title={t('intro.title')}
						text={
							<>
								{t('intro.p1')}
								<Spacer height="1rem" />
								{t('intro.p2')}
								<Spacer height="1rem" />
								{t('intro.p3')}
								<Spacer height="1rem" />
								{t('intro.p4')}
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
					title={t('projects.title')}
					text={
						<>
							{t('projects.p1')}
							<Spacer height="1rem" />
							{t('projects.p2')}
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
								key={t('other.title')}
								className="other-section__heading"
								style={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
								}}
								initial={{ width: 0 }}
								whileInView={{
									width: `${t('other.title').length + 1}ch`,
								}}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.7, ease: 'linear' }}>
								{t('other.title')}
							</motion.h3>
						</article>

						<figure className="icon-container__other">
							<div className="icon-item">
								<a
									href="https://github.com/welene"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t('other.githubLabel')}>
									<lord-icon
										src="./animated/git-ani.json"
										trigger="hover"
										aria-hidden="true"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									{t('other.github')}
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://moisaart.picflow.com/59p9zhzt82"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t('other.artLabel')}>
									<lord-icon
										src="./animated/draw-ani.json"
										trigger="hover"
										aria-hidden="true"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									{t('other.art')}
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://moisaart.picflow.com/xs2ltt0twg"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t('other.photoLabel')}>
									<lord-icon
										src="./animated/photo-ani.json"
										trigger="hover"
										aria-hidden="true"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									{t('other.photo')}
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
								key={t('contact.title')}
								className="contact-section__heading"
								style={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
								}}
								initial={{ width: 0 }}
								whileInView={{
									width: `${t('contact.title').length + 1}ch`,
								}}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.7, ease: 'linear' }}>
								{t('contact.title')}
							</motion.h3>
							<p className="contact-section__txt">
								{t('contact.text')}
							</p>
						</article>

						<figure className="icon-container__contact">
							<div className="icon-item">
								<a
									href="mailto:helenetheo@live.no"
									aria-label={t('contact.emailLabel')}>
									<lord-icon
										src="./animated/email-ani.json"
										trigger="hover"
										aria-hidden="true"
										style={{
											width: '70px',
											height: '70px',
										}}></lord-icon>
								</a>
								<p className="icon-container__icon--info">
									{t('contact.email')}
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://www.instagram.com/helenetheodorsen/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t('contact.instagramLabel')}>
									<lord-icon
										src="./animated/inst-ani.json"
										trigger="hover"
										aria-hidden="true"
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
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t('contact.linkedinLabel')}>
									<lord-icon
										src="./animated/link-ani.json"
										trigger="hover"
										aria-hidden="true"
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
