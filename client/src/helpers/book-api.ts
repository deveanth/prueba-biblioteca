const URL = "http://localhost:5000/book/";

export const findBookByAvailable = async (isAvailable: boolean) => {
	return await fetch(`${URL}available/${isAvailable}`);
};

export const createBook = async (name: string) => {
	return await fetch(`${URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});
};

export const removeBook = async (id: number) => {
	return await fetch(`${URL}${id}`, {
		method: "DELETE",
	});
};

export const updateBook = async (id: number, name: string) => {
	return await fetch(`${URL}${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});
};

export const findAllBook = async () => {
	return await fetch(`${URL}`);
};

