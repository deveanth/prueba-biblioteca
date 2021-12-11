import { NextFunction, Request, Response } from "express";
import {
	ServiceCreateUser,
	ServiceRemoveUser,
	ServiceUpdateUser,
} from "@user/services/service-command";

import { UserDTO } from "./command-dto";

export async function HandlerCreateUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name }: UserDTO = request.body;
		response.status(200).json(await ServiceCreateUser(name));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerRemoveUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { id } = request.params;
		response.status(200).json(await ServiceRemoveUser(Number(id)));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
export async function HandlerUpdateUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name }: UserDTO = request.body;
		const { id } = request.params;
		response.status(200).json(await ServiceUpdateUser(Number(id), name));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
