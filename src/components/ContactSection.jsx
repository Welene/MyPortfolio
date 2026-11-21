import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
	const { t } = useTranslation();

	return (
		<section className="parallax_group">
			<div className="mid_layer">
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
						<motion.h2
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
						</motion.h2>
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
	);
}
