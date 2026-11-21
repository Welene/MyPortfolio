import './Article.css';
import { motion } from 'framer-motion';

function Article({ text, title }) {
	return (
		<article className="article">
			<motion.h2
				className="article_title"
				style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
				initial={{ width: 0 }}
				whileInView={{ width: '30ch' }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 2, ease: 'linear' }}>
				{title}
			</motion.h2>
			<section className="article_text">{text}</section>
		</article>
	);
}

export default Article;
