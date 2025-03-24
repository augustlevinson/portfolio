import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home.tsx";
import Work from "./views/Work/Work.tsx";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
			</Routes>
		</div>
	);
}

export default App;
