import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import IconContainer from '../components/IconContainer';

export default function Skills() {
	const { t } = useTranslation();
	return (
		<>
			<motion.div
				className="intro-section__icons"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1.1 }}
				transition={{ duration: 3 }}
				viewport={{ once: true, amount: 0.1 }}>
				<IconContainer />
			</motion.div>
		</>
	);
}
