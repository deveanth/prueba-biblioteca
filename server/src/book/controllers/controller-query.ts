import { NextFunction, Request, Response } from "express";
import {
	ServiceFindAllBook,
	ServiceFindByIDBook,
	ServiceFindByIsAvailableBook,
	ServiceFindByNameBook,
} from "@book/services/service-query";

export async function HandlerFindByIDBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { id } = request.params;
		response.status(200).json(await ServiceFindByIDBook(Number(id)));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerFindByNameBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name } = request.params;
		response.status(200).json(await ServiceFindByNameBook(name));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerFindByIsAvailableBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { available } = request.params;
		response
			.status(200)
			.json(await ServiceFindByIsAvailableBook(available === "true"));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerFindAllBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		response.status(200).json(await ServiceFindAllBook());
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
