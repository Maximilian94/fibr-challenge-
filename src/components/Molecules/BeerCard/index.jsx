import React from "react";
import { Link } from "react-router-dom";

// Material UI
import { Grid, Typography } from "@mui/material";

const BeerCard = (props) => {
	const { name, tagline, image_url, id } = props.beerData;
	console.log(name);
	return (
		<Link
			style={{ textDecoration: "none", color: "black" }}
			to={`/beer-detail/${id}`}
		>
			<div
				style={{
					borderRadius: 10,
					background: "white",
					padding: 10,
					margin: 10,
					width: 320,
					height: 200,
					boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
				}}
				className="card"
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
						}}
					>
						<Typography variant="h6" style={{ marginTop: 20 }} align="left">
							{name}
						</Typography>
						<Typography style={{ marginTop: 20 }} align="left">
							{tagline}
						</Typography>
					</Grid>
				</Grid>
			</div>
		</Link>
	);
};

export default BeerCard;
