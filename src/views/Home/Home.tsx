import React from "react";
import Links from "../../components/Links/Links";
import "./home.css";
import Grainient from './Grainient';

const Home: React.FC = () => {
	return (
		<div className="landing-container">
			<Grainient
    color1="#8e00ff"
    color2="#401359"
    color3="#b872cd"
    timeSpeed={0.8}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={6.9}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={20}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
			<h1 className="twist-animation"><a className="name-heading heading-shadow" href="/">August Levinson</a></h1>
			<h2>Web developer</h2>
			<p>Currently at <a href="https://rhythmicvisions.io/">Rhythmic Visions</a>.</p>
			<p>Located in Stockholm.</p>
		<div className="links-container">
			<Links />
		</div>
		</div>
	);
};

export default Home;