import { getRepository } from "typeorm";
import { Book } from "@book/models/book-entity";

export async function ServiceFindByIDBook(id: number) {
	const bookRepository = getRepository(Book);
	const book = await bookRepository.findOne({ id }, { relations: ["user"] });
	if (book) {
		return book;
	}
	throw new Error("Book not found");
}

export async function ServiceFindByNameBook(name: string) {
	const bookRepository = getRepository(Book);
	const book = await bookRepository.findOne({ name }, { relations: ["user"] });
	if (book) {
		return book;
	}
	throw new Error("Book not found");
}

export async function ServiceFindByIsAvailableBook(isAvailable: boolean) {
	const bookRepository = getRepository(Book);
	return await bookRepository.find({ isAvailable });
}

export async function ServiceFindAllBook() {
	const bookRepository = getRepository(Book);
	return await bookRepository.find({ relations: ["user"] });
}
