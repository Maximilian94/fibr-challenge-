import React, { useEffect, useState } from "react";

// Material UI
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Components
import { BeerCard } from "../../components/Molecules";

// API
import { getBeerByPage } from "../../services/api";
import { formControlClasses } from "@mui/material";

const BeerList = () => {
	const [beers, setBeers] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [itemPerPage, setItemsPerPage] = useState(10);

	const pageChange = (event, value) => {
		setPage(value);
	};

	const getData = async () => {
		setIsLoading(true);
		const newData = await getBeerByPage(page, itemPerPage);
		setIsLoading(false);
		setBeers(newData);
	};

	useEffect(() => {
		getData();
	}, [page, itemPerPage]);

	const List = () => {
		console.log(beers);
		return beers.map((beer) => <BeerCard beerData={beer} key={beer.id} />);
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				paddingTop: 50,
			}}
		>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id="Items per page">Items per page</InputLabel>
					<Select
						labelId="Items per page"
						id="Items per page"
						value={itemPerPage}
						label="Items per page"
						onChange={(event) => setItemsPerPage(event.target.value)}
					>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={30}>30</MenuItem>
					</Select>
				</FormControl>
			</Box>
			BeerList
			<div
				style={{
					width: "60%",
					padding: 10,
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					alignContent: "flex-start",
				}}
			>
				{isLoading ? <CircularProgress /> : List()}
			</div>
			<Pagination count={10} page={page} onChange={pageChange} />
		</div>
	);
};

export default BeerList;
