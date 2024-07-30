import Diary from "../models/diary.model";

class diaryServices {
	static createDiary = async (title: string, description: string, userId: string): Promise<void> => {
        try {
			console.log(`Creating ${title}, ${description}, ${userId}`);

			const diary = new Diary({
				title,
                description,
                userId
			})

			await diary.save();
		} catch (error) {
			throw new Error(`Failed to create ${title}, error: ${error}`);
		}
    }
}

export default diaryServices;