import { padding } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Material UI
import {
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import { getSingleBeerDetail } from "../../services/api";

const BeerDetail = () => {
	const [beerDetail, setBeerDetail] = useState({});
	const params = useParams();

	const getBeerDetail = async () => {
		const detail = await getSingleBeerDetail(params.id);
		setBeerDetail(detail[0]);
	};

	useEffect(() => {
		getBeerDetail();
	}, []);

	const foodPairing = () => {
		return (
			<List>
				{beerDetail.food_pairing.map((item) => (
					<ListItem>
						<ListItemIcon>
							<LocalDiningIcon />
						</ListItemIcon>
						<ListItemText>{item}</ListItemText>
					</ListItem>
				))}
			</List>
		);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Typography variant="h2">PUNK API</Typography>
			<div
				style={{
					marginTop: 30,
					width: "70%",
				}}
			>
				<Divider />
				<Grid container spacing={2} style={{ paddingTop: 30 }}>
					<Grid item xs={4}>
						<img src={beerDetail.image_url} style={{ height: 500 }} />
					</Grid>
					<Grid
						item
						xs={8}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "flex-start",
						}}
					>
						<Typography variant="h2">{beerDetail.name}</Typography>
						<Typography>
							<strong>ABV: </strong>
							{`${beerDetail.abv}%`}
						</Typography>
						<Typography
							align="left"
							variant="subtitle1"
							style={{ margin: 10 }}
						>{`${beerDetail.description}`}</Typography>
						<Typography variant="h6">{`Why not try with:`}</Typography>
						{beerDetail.food_pairing ? foodPairing() : null}
					</Grid>
				</Grid>
			</div>
			<Link to="/">
				<button type="button">Back to home</button>
			</Link>
		</div>
	);
};

export default BeerDetail;
