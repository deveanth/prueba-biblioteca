import { ServiceFindAllBookExchange } from "@book-exchange/services/service-query";
import { NextFunction, Request, Response } from "express";

export async function HandlerFindAllBookExchangeController(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		response.status(200).json(await ServiceFindAllBookExchange());
	} catch (error: any) {
		response.status(400).json({ error: error.message });
	}
}
