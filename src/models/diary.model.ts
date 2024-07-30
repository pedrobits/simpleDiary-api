import { Schema, Model, model, Document } from "mongoose";

interface IDiary extends Document {
    title: string;
    description: string;
    userId: string;
}

const diarySchema = new Schema<IDiary>({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    userId: { type: String, required: true }
});

const Diary: Model<IDiary> = model<IDiary>('Diary', diarySchema);

export default Diary;
