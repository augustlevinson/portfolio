import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home.tsx";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
