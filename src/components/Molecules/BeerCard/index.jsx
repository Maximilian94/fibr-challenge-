import React from "react";
import { Link } from "react-router-dom";

// Material UI
import { Grid, Typography } from "@mui/material";

const BeerCard = (props) => {
	const { name, tagline, image_url, id } = props.beerData;
	console.log(name);
	return (
		<Link to={`/beer-detail/${id}`}>
			<div
				style={{
					borderRadius: 10,
					background: "white",
					padding: 10,
					margin: 10,
					width: 300,
					height: 200,
					boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<img src={image_url} style={{ maxHeight: 200, maxWidth: 50 }} />
					</Grid>
					<Grid
						item
						xs={6}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
						}}
					>
						<Typography>{name}</Typography>
						<Typography>{tagline}</Typography>
					</Grid>
				</Grid>
			</div>
		</Link>
	);
};

export default BeerCard;
