import { Router } from "express";
import {
	HandlerCreateUserController,
	HandlerRemoveUserController,
	HandlerUpdateUserController,
} from "./controllers/controller-command";
import {
	HandlerFindAllUserController,
	HandlerFindByIDUserController,
	HandlerFindByNameUserController,
} from "./controllers/controller-query";

export const UserRoute: Router = Router();

UserRoute.post("/", HandlerCreateUserController);
UserRoute.delete("/:id", HandlerRemoveUserController);
UserRoute.put("/:id", HandlerUpdateUserController);
UserRoute.get("/:id", HandlerFindByIDUserController);
UserRoute.get("/name/:name", HandlerFindByNameUserController);
UserRoute.get("/", HandlerFindAllUserController);
