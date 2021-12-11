import { getRepository } from "typeorm";
import { User } from "@user/models/user-entity";

export async function ServiceFindByIDUser(id: number) {
	const userRepository = getRepository(User);
	const user = await userRepository.findOne({ id }, { relations: ["books"] });
	if (user) {
		return user;
	}
	throw new Error("User not found");
}

export async function ServiceFindByNameUser(name: string) {
	const userRepository = getRepository(User);
	const user = await userRepository.findOne({ name }, { relations: ["books"] });
	if (user) {
		return user;
	}
	throw new Error("User not found");
}

export async function ServiceFindAllUser() {
	const userRepository = getRepository(User);
	return await userRepository.find({ relations: ["books"] });
}
