import { getRepository } from "typeorm";
import { Book } from "@book/models/book-entity";

export async function ServiceCreateBook(name: string) {
	const bookRepository = getRepository(Book);
	const book = bookRepository.create();
	book.name = name;
	return await bookRepository.save(book);
}

export async function ServiceUpdateBook(
	id: number,
	name?: string,
	isAvailable?: boolean
) {
	const bookRepository = getRepository(Book);
	const book = await bookRepository.findOne({ id });
	if (!book) throw new Error("Book not found");
	if (name) book.name = name;
	if (isAvailable) book.isAvailable = isAvailable;
	return await bookRepository.save(book);
}

export async function ServiceRemoveBook(id: number) {
	const bookRepository = getRepository(Book);
	const book = await bookRepository.findOne({ id });
	if (book) {
		return await bookRepository.remove(book);
	}
	throw new Error("Book not found");
}
