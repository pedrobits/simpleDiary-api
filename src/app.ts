import bodyParser from 'body-parser';
import express from 'express';
import { Server } from 'node:http';
import router from "./routes/index"

export default class SetupApplication {
	private server?: Server;

	constructor(private port = 3000, public app = express()) { }

	public init(): void {
		this.setupExpress();
		this.setupRoutes();
	}

	private setupRoutes(): void {
		this.app.use(router);
	}

	private setupExpress(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	public start(): void {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}
}