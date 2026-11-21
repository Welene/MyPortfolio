import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Spacer from '../components/Spacer';

export default function Home() {
	const { t } = useTranslation();
	return (
		<>
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
		</>
	);
}
