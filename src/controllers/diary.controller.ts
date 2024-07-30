import { Request, Response } from "express";
import diaryServices from '../services/diary.service';
import Diary from "../models/diary.model";

class diaryController {
	static createDiary = async (req: Request, res: Response) => {
		try {
			const { title, description, idUser } = req.body;

			if (!title || !description || !idUser) {
				return res.status(400).send('Missing required fields');
			}

			await diaryServices.createDiary(title, description, idUser)

			return res.status(201).send({
				message: 'Diary created successfully'
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ Error: "Yes", Details: error.message })
			} else {
				res.status(500).json({ message: 'Unknown error' });
			}
		}
	}

	static getAllDiaries = async (req: Request, res: Response) => {
		try {
			const { iduser } = req.query;

			if (!iduser) {
				return res.status(400).send('Missing required fields');
			}

			const diaries = await Diary.find({ userId: iduser });

			return res.status(200).send({
				diaries
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ Error: "Yes", Details: error.message })
			} else {
				res.status(500).json({ message: 'Unknown error' });
			}
		}
	}

	static editDiary = async (req: Request, res: Response) => {
		try {
			const { id, title, description } = req.body;

			if (!id || !title || !description) {
				return res.status(400).send('Missing required fields');
			}

			const diary = await Diary.findByIdAndUpdate(id, { title, description }, { new: true });

			if (!diary) {
				return res.status(404).send('Diary not found');
			}

			return res.status(200).send({
				message: 'Diary updated successfully',
				diary
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ Error: "Yes", Details: error.message })
			} else {
				res.status(500).json({ message: 'Unknown error' });
			}
		}
	}

	static deleteDiary = async (req: Request, res: Response) => {
		try {
			const { id } = req.body;

			if (!id) {
				return res.status(400).send('Missing required fields');
			}

			const diary = await Diary.findByIdAndDelete(id);

			if (!diary) {
				return res.status(404).send('Diary not found');
			}

			return res.status(200).send({
				message: 'Diary deleted successfully'
			});
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ Error: "Yes", Details: error.message })
			} else {
				res.status(500).json({ message: 'Unknown error' });
			}
		}
	}
}

export default diaryController;