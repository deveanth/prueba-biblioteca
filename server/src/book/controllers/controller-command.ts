import { NextFunction, Request, Response } from "express";
import {
	ServiceCreateBook,
	ServiceRemoveBook,
	ServiceUpdateBook,
} from "@book/services/service-command";
import { CreatedBookDTO, UpdateBookDTO } from "./command-dto";

export async function HandlerCreateBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name }: CreatedBookDTO = request.body;
		response.status(200).json(await ServiceCreateBook(name));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerRemoveBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { id } = request.params;
		response.status(200).json(await ServiceRemoveBook(Number(id)));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
export async function HandlerUpdateBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { name, available }: UpdateBookDTO = request.body;
		const { id } = request.params;
		response
			.status(200)
			.json(await ServiceUpdateBook(Number(id), name, available));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
