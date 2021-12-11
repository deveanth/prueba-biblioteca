import { Router } from "express";
import {
	HandlerCreateBookController,
	HandlerRemoveBookController,
	HandlerUpdateBookController,
} from "./controllers/controller-command";
import {
	HandlerFindByIDBookController,
	HandlerFindByNameBookController,
	HandlerFindByIsAvailableBookController,
	HandlerFindAllBookController,
} from "./controllers/controller-query";

export const BookRoute: Router = Router();

BookRoute.post("/", HandlerCreateBookController);
BookRoute.delete("/:id", HandlerRemoveBookController);
BookRoute.put("/:id", HandlerUpdateBookController);
BookRoute.get("/:id", HandlerFindByIDBookController);
BookRoute.get("/name/:name", HandlerFindByNameBookController);
BookRoute.get("/available/:available", HandlerFindByIsAvailableBookController);
BookRoute.get("/", HandlerFindAllBookController);
