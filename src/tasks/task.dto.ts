import { Document } from 'mongoose';

export class TaskDto  extends Document {
    description: string;
    completed: boolean;
}