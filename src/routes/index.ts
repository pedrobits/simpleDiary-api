import { Request, Response, Router } from 'express';
import checkController from '../controllers/check.controller';
import diaryEntriesController from '../controllers/diaryEntries.controller';
import diaryController from '../controllers/diary.controller';

class Routes {
	static define(router: Router): Router {
		router.get('/', (req: Request, res: Response) => {
			return res.status(200).json({ APIVERSION: "1.0" });
		});

		// Health check endpoint
		router.get('/check-health', (req: Request, res: Response) => {
			checkController.checkHealth(req, res);
		});

		// Diary endpoint
		router.get('/diary', (req: Request, res: Response) => {
            diaryController.getAllDiaries(req, res);
        });
		
		router.post('/diary', (req: Request, res: Response) => {
			diaryController.createDiary(req, res);
		});

		router.put('/diary', (req: Request, res: Response) => {
            diaryController.editDiary(req, res);
        });

		router.delete('/diary', (req: Request, res: Response) => {
            diaryController.deleteDiary(req, res);
        });

		// Diary Entries endpoint
		router.get('/diary/entry', (req: Request, res: Response) => {
			diaryEntriesController.getAllEntries(req, res);
		})

		router.post('/diary/entry', (req: Request, res: Response) => {
			diaryEntriesController.createEntry(req, res);
		});

		return router;
	}
}

export default Routes.define(Router());
