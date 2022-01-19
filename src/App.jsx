import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// Pages
import { BeerDetail, BeerList } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<BeerList />} />
				<Route path="beer-detail/:id" element={<BeerDetail />} />
			</Routes>
		</div>
	);
}

export default App;
