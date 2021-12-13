const URL = "http://localhost:5000/book-exchange/";

export const lendBook = async (idBook: number, idUser: number) => {
	return await fetch(`${URL}lend`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ idBook, idUser }),
	});
};

export const returnBook = async (id: number) => {
	return await fetch(`${URL}return/${id}`, {
		method: "POST",
	});
};

export const FindAllBookExchange = async () => {
	return await fetch(`${URL}`);
};
