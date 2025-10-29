import './IconContainer.css';
import cssIcon from '../assets/icons/css.png';
import figmaIcon from '../assets/icons/figma.png';
import gitIcon from '../assets/icons/github.png';
import htmlIcon from '../assets/icons/html.png';
import jsIcon from '../assets/icons/javascript.png';
import mongoIcon from '../assets/icons/mongodb.png';
import nodeIcon from '../assets/icons/nodejs.png';
import reactIcon from '../assets/icons/react.png';
import vscIcon from '../assets/icons/vscode.png';
import awsIcon from '../assets/icons/aws.png';
import dynaIcon from '../assets/icons/dynamodb.png';
import agileIcon from '../assets/icons/agile.png';

function IconContainer() {
	return (
		<section className="icon-container">
			<figure className="icon-container__logo">
				<img
					src={cssIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--css">
					CSS
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={htmlIcon}
					alt="HTML Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--html">
					HTML
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={jsIcon}
					alt="JavaScript Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--js">
					JavaScript
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={reactIcon}
					alt="React Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--react">
					React
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={nodeIcon}
					alt="Node.js Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--node">
					Node.js
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={vscIcon}
					alt="VS Code Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--vsc">
					VS Code
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={figmaIcon}
					alt="Figma Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--figma">
					Figma
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={mongoIcon}
					alt="MongoDB Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--mongo">
					MongoDB
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={dynaIcon}
					alt="DynamoDB Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--dyna">
					DynamoDB
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={awsIcon}
					alt="AWS Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--aws">
					AWS
				</p>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={gitIcon}
					alt="GitHub Icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--git">
					Github
				</p>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={agileIcon}
					alt="Agile teamwork icon"
					className="icon-container__icon"
				/>
				<p className="icon-container__text icon-container__text--agile">
					Agilt
				</p>
			</figure>
		</section>
	);
}

export default IconContainer;
