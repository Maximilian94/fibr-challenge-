export const getBeerByPage = async (page, itemsPerPage) => {
	const endPoint = await fetch(
		`https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPerPage}`
	);
	const response = await endPoint.json();
	return response;
};
