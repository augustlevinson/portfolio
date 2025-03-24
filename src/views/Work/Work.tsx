import "./Work.css";
import Tag from "../../components/Tag/Tag";
import OceanView from "../../assets/oceanview-showcase.png";
import Fenix from "../../assets/fenix-showcase.png";
import BlackJack from "../../assets/blackjack-showcase.png"
import Editor from "../../assets/editor-showcase.png"

const Work = () => {
	return (
		<div className="work-container">
			<h1>
				<a className="name-heading" href="/">
					August Levinson
				</a>
			</h1>
			<h2>A selection of my previous work.</h2>
			<div className="work-grid">
				<div className="work-item">
					<Tag contents={["UI Design", "Visual Identity", "SCSS", "Flat File CMS", "Pico"]} />
					<div className="work-image">
						<img src={OceanView} />
					</div>
					<h2>Oceanview Legal</h2>
					<p>
						Responsive website design and frontend for a fictional client in the corporate legal
						space.
					</p>
					<p className="project-link-wrapper">
						<a
							className="project-link"
							href="https://www.student.bth.se/~aule23/dbwebb-kurser/design/me/proj/services">
							Live demo &gt;
						</a>
					</p>
				</div>
				<div className="work-item">
					<Tag contents={["React", "MongoDB", "TypeScript", "Flutter", "Node.js", "Docker", "UI Design"]} />
					<div className="work-image">
						<img src={Fenix} />
					</div>
					<h2>Fenix Bikes</h2>
					<p>
						Frontend, backend and UI design for an electric scooter service. Since all team members
						worked remotely from different locations and sometimes timezones we applied GitHub Flow
						for managing smooth version control.
					</p>
					<p className="project-link-wrapper">
						<a className="project-link" href="https://github.com/eckepecke/fenix_bikes">
							GitHub repo &gt;
						</a>
					</p>
				</div>
				<div className="work-item">
					<Tag contents={["WebSockets", "React", "MongoDB", "TypeScript", "Node.js", "JWT"]} />
					<div className="work-image">
						<img src={Editor} />
					</div>
					<h2>Real-time Editor</h2>
					<p>
					A collaborative real-time editor built on websocket connections.
					</p>
					<p className="project-link-wrapper">
						<a className="project-link" href="https://github.com/augustlevinson/ssr-editor-frontend">
							GitHub repo &gt;
						</a>
					</p>
				</div>
				<div className="work-item">
				<Tag contents={["Object-Oriented Programming", "PHP", "Symfony", "Twig", "Unit Testing", "MVC"]} />
				<div className="work-image">
						<img src={BlackJack} />
					</div>
					<h2>Black Jack</h2>
					<p>A simple implementation of a BlackJack card game. The project was built with object oriented PHP, Symfony, and Twig. Unit tests were implemented to ensure the game's logic functions as expected.</p>
					<p className="project-link-wrapper">
						<a
							className="project-link"
							href="https://www.student.bth.se/~aule23/dbwebb-kurser/mvc/me/report/public/proj">
							Live demo &gt;
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;
