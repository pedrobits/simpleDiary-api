import { model, Schema } from "mongoose";

interface IEntry {
    entry: string;
    idDiary: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const entrySchema = new Schema<IEntry>({
    entry: { type: String, required: true },
    idDiary: { type: Schema.Types.ObjectId, ref: 'Diary', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Entry = model<IEntry>('Entry', entrySchema);

export default Entry;