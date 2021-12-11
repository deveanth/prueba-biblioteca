import { getRepository } from "typeorm";

import { ServiceFindByIDBook } from "@book/services/service-query";
import { ServiceFindByIDUser } from "@user/services/service-query";
import {
	BookExchange,
	TypeBookExchange,
} from "@book-exchange/models/book-exchange-entity";
import { Book } from "@book/models/book-entity";
import { User } from "@user/models/user-entity";

export async function ServiceLendBook(idBook: number, idUser: number) {
	const book = await ServiceFindByIDBook(idBook);
	const user = await ServiceFindByIDUser(idUser);
	if (book.isAvailable) {
		book.isAvailable = false;
		const bookRepository = getRepository(Book);
		bookRepository.save(book);
		user.books = [...user.books, book];
		const userRepository = getRepository(User);
		userRepository.save(user);
		const bookExchangeRepository = getRepository(BookExchange);
		const bookExchange = bookExchangeRepository.create();
		bookExchange.nameUser = user.name;
		bookExchange.nameBook = book.name;
		return await bookExchangeRepository.save(bookExchange);
	}
	throw new Error("Book not Available");
}

export async function ServiceReturnBook(id: number) {
	const book = await ServiceFindByIDBook(id);
	if (!book.isAvailable) {
		const bookExchangeRepository = getRepository(BookExchange);
		const bookExchange = bookExchangeRepository.create();
		bookExchange.nameUser = book.user.name;
		bookExchange.nameBook = book.name;
		bookExchange.typeBookExchange = TypeBookExchange.RETURN;
		book.isAvailable = true;
		book.user = null;
		const bookRepository = getRepository(Book);
		bookRepository.save(book);
		return await bookExchangeRepository.save(bookExchange);
	}
	throw new Error("Book is Available");
}
