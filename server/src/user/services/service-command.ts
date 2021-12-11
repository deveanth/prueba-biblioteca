import { getRepository } from "typeorm";
import { User } from "@user/models/user-entity";

export async function ServiceCreateUser(name: string) {
	const userRepository = getRepository(User);
	const user = userRepository.create();
	user.name = name;
	return await userRepository.save(user);
}

export async function ServiceUpdateUser(id: number, name: string) {
	const userRepository = getRepository(User);
	const user = await userRepository.findOne({ id });
	if (!user) throw new Error("User not found");
	user.name = name;
	return await userRepository.save(user);
}

export async function ServiceRemoveUser(id: number) {
	const userRepository = getRepository(User);
	const user = await userRepository.findOne({ id });
	if (user) {
		return await userRepository.remove(user);
	}
	throw new Error("User not found");
}
