import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "@book/models/book-entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true,
	})
	name: string;

	@OneToMany(() => Book, (book: Book) => book.user)
	books: Book[];
}
