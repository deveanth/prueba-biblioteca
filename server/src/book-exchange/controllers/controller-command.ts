import { NextFunction, Request, Response } from "express";
import {
	ServiceLendBook,
	ServiceReturnBook,
} from "@book-exchange/services/service-command";
import { LendBookDTO } from "./command-dto";

export async function HandlerLendBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { idBook, idUser }: LendBookDTO = request.body;
		response.status(200).json(await ServiceLendBook(idBook, idUser));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}

export async function HandlerReturnBookController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const { id } = request.params;
		response.status(200).json(await ServiceReturnBook(Number(id)));
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
