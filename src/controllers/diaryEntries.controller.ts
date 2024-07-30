import { Request, Response } from "express";
import formatText from '../utils/formatTextEntry';
import Entry from "../models/entry.model";

class diaryEntriesController {
	public static createEntry = async (req: Request, res: Response): Promise<any> => {
		try {

			const { iddiary } = req.query;

			const { entry } = req.body;

			if (!entry && !iddiary) {
				return res.status(400).send('Missing required fields');
			}

			const textFormated = new formatText(entry)

			const newEntry = new Entry({
				entry: textFormated.format(),
				idDiary: iddiary
			});

			await newEntry.save();

			return res.status(201).send({
				message: 'Entry created successfully',
				entry: textFormated.format()
			});
		} catch (error) {
			return res.status(500).send({ Error: "Yes", Details: error });
		}
	}

	public static getAllEntries = async (req: Request, res: Response): Promise<any> => {
		try {
			const { iddiary } = req.query;
	
			if (!iddiary) {
				return res.status(400).send('Missing required fields');
			}
	
			const findEntriesByDiary = await Entry.find({ idDiary: iddiary }).select('entry createdAt');;
	
			return res.status(200).send({
				message: 'All entries retrieved successfully',
				entries: findEntriesByDiary
			});
		} catch (error) {
			return res.status(500).send({ Error: "Yes", Details: error });
		}
	}	
}

export default diaryEntriesController;