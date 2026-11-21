import { useTranslation } from 'react-i18next';

function BoinkName() {
	const { t } = useTranslation();
	return (
		<>
			<div className="boink-name__container">
				<h1 className="intro_screen__title">
					<span className="boink-name">Helene Theodorsen</span>
				</h1>
			</div>
		</>
	);
}

export default BoinkName;
