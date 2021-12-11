import { getRepository } from "typeorm";
import { BookExchange } from "@book-exchange/models/book-exchange-entity";

export async function ServiceFindAllBookExchange() {
	const bookExchangeRepository = getRepository(BookExchange);
	return await bookExchangeRepository.find();
}
