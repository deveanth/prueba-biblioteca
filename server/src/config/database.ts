import { createConnection } from "typeorm";
import { database } from "./environment";
import { Book } from "@book/models/book-entity";
import { User } from "@user/models/user-entity";
import { BookExchange } from "@book-exchange/models/book-exchange-entity";

export const connection = async () =>
	await createConnection({
		type: "postgres",
		host: database.host,
		port: database.port,
		username: database.user,
		password: database.password,
		database: database.name,
		entities: [Book, User, BookExchange],
		synchronize: true,
	});
