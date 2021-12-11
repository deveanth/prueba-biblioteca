import dotenv from "dotenv";

dotenv.config();

export const server = {
	port: process.env.PORT || 5000,
};

export const database = {
	host: process.env.HOST_DATABASE || "localhost",
	port: Number(process.env.PORT_DATABASE) || 5432,
	name: process.env.NAME_DATABASE || "library-test",
	user: process.env.USER_DATABASE || "postgres",
	password: process.env.PASSWORD_DATABASE || "root",
};
