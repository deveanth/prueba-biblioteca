/* eslint-disable no-unused-vars */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TypeBookExchange {
	LEND = "lend",
	RETURN = "return",
}

@Entity()
export class BookExchange {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		type: "enum",
		enum: TypeBookExchange,
		default: TypeBookExchange.LEND,
	})
	typeBookExchange!: TypeBookExchange;

	@Column()
	date: Date = new Date();

	@Column()
	nameBook: string;

	@Column()
	nameUser: string;
}
