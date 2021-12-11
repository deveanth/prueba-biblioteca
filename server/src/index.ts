import "reflect-metadata";
import { connection } from "@config/database";
import { App } from "@main/express";

async function bootstrap() {
	await connection();
	App();
	console.log("server running 💥");
}

bootstrap();
