import SetupApplication from "./app";
import MongoDB from './db/mongo';

class Server {
	static start(): void {
		const app = new SetupApplication();
		app.init();
		app.start();
		MongoDB.connect();
		console.log("Server started");
	}
}

Server.start();