import './Section.css';
import Article from '../components/Article';

function Section({ title, text }) {
	return (
		<section className="infoContainer">
			<Article title={title} text={<>{text}</>} />
		</section>
	);
}

export default Section;
