import { Request, Response } from "express";

class checkController {
	static checkHealth = (_req: Request, res: Response) => {
		const healthcheck = {
		  uptime: process.uptime(),
		  timestamp: Date.now(),
		};
	  
		res.send(healthcheck);
	}
}

export default checkController;