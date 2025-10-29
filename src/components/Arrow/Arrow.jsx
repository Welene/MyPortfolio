import './Arrow.css';
import ArrowIcon from '../../assets/icons/arrow-up.png';
import useScrollToTop from '../../hooks/ScrollArrow';

function Top() {
	const { visible, scrollToTop } = useScrollToTop();
	return (
		<figure className="arrow__up">
			<img
				src={ArrowIcon}
				alt="Arrow pointing up"
				className={`scroll-arrow ${visible ? 'visible' : ''}`}
				onClick={scrollToTop}
			/>
		</figure>
	);
}

export default Top;
