import React from "react";
import Links from "../../components/Links/Links";
// import "./Home.css";

const Home: React.FC = () => {
	return (
		<div className="landing-container">
			<h1 className="twist-animation"><a className="name-heading" href="/">August Levinson</a></h1>
			<h2>Web developer</h2>
			<p>Located in Stockholm</p>
			<Links />
			<a className="work-link" href="/work">
				Selected work &gt;
			</a>
		</div>
	);
};

export default Home;