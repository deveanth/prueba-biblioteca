import { Router } from "express";
import {
	HandlerLendBookController,
	HandlerReturnBookController,
} from "./controllers/controller-command";
import { HandlerFindAllBookExchangeController } from "./controllers/controller-query";

export const bookExchangeRoute: Router = Router();

bookExchangeRoute.post("/lend", HandlerLendBookController);
bookExchangeRoute.post("/return/:id", HandlerReturnBookController);
bookExchangeRoute.get("/", HandlerFindAllBookExchangeController);
