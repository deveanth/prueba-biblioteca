const URL = "http://localhost:5000/user/";

export const findUserByName = async (name: string) => {
	return await fetch(`${URL}name/${name}`);
};

export const findAllUser = async () => {
	return await fetch(`${URL}`);
};

export const createUser = async (name: string) => {
	return await fetch(`${URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});
};

export const removeUser = async (id: number) => {
	return await fetch(`${URL}${id}`, {
		method: "DELETE",
	});
};

export const updateUser = async (id: number, name: string) => {
	return await fetch(`${URL}${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});
};
