import React from "react";
import { Link } from "react-router-dom";

const BeerList = () => {
	return (
		<div>
			BeerList
			<button type="button">
				<Link to="/beer-detail">Beer detail</Link>
			</button>
		</div>
	);
};

export default BeerList;
