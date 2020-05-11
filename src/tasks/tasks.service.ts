import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel('TaskDto') private readonly taskModel: Model<TaskDto>) {}

    async getAll(){
        return await this.taskModel.find().exec();
    }

    async getById(id: string){
        return await this.taskModel.findById({_id: id}).exec();
    }

    async create(task: TaskDto){
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    async update(id: string, task: TaskDto){
        await this.taskModel.updateOne({_id: id}, task).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.taskModel.deleteOne({_id: id}).exec();
    }
}
