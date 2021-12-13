import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "@user/models/user-entity";

@Entity()
export class Book {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true,
	})
	name: string;

	@Column({
		default: true,
	})
	isAvailable: boolean = true;

	@ManyToOne(() => User, (user: User) => user.books)
	user: User;
}
