import express, { Application } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import { BookRoute } from "@book/book-routes";
import { server } from "@config/environment";
import { UserRoute } from "@user/user-routes";
import { bookExchangeRoute } from "@book-exchange/book-exchange-routes";

export function App() {
	const app: Application = express();
	app
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: true }))
		.use(compression())
		.use(morgan("tiny"))
		.use(cors());
	app.use("/book", BookRoute);
	app.use("/user", UserRoute);
	app.use("/book-exchange", bookExchangeRoute);
	app.listen(server.port);
}
