import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import EmblaCarousel from '../components/EmblaCarousel';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Spacer from '../components/Spacer';
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

export default function Projects() {
	const { t } = useTranslation();

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
		<>
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
				<div className="carousel-box">
					<EmblaCarousel
						slides={projectPhotosDesktop}
						className="embla-desktop"
					/>
				</div>
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
				<div className="carousel-box carousel-box--phone">
					<EmblaCarousel
						slides={projectPhotosPhone}
						className="embla-phone"
					/>
				</div>
			</motion.div>
		</>
	);
}
