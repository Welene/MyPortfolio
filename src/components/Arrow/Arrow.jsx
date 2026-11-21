import './Arrow.css';
import ArrowIcon from '../../assets/icons/arrow-up.png';
import useScrollToTop from '../../hooks/ScrollArrow';
import { useTranslation } from 'react-i18next';

export default function Top() {
	const { t } = useTranslation();
	const { visible, scrollToTop } = useScrollToTop();
	return (
		<figure className="arrow__up">
			<button
				type="button"
				onClick={scrollToTop}
				aria-label={t('common.toTop')}
				className={`scroll-arrow ${visible ? 'visible' : ''}`}>
				<img src={ArrowIcon} alt="" />
			</button>
		</figure>
	);
}
