import { NextFunction, Request, Response } from "express";
import {
	ServiceFindByIDUser,
	ServiceFindByNameUser,
	ServiceFindAllUser,
} from "@user/services/service-query";

export async function HandlerFindByIDUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { id } = request.params;
		response.status(200).json(await ServiceFindByIDUser(Number(id)));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerFindByNameUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name } = request.params;
		response.status(200).json(await ServiceFindByNameUser(name));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerFindAllUserController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		response.status(200).json(await ServiceFindAllUser());
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
