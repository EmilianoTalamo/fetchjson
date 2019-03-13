const fetchJSON = (fetchUrl, returnString = false) => {
	return new Promise((resolve, reject) => {
		fetch(fetchUrl)
			.then(response => response.json())
			.then(data => {
				returnString ? resolve(JSON.stringify(data)) : resolve(data)
			})
			.catch(error => reject(error));
	});
};