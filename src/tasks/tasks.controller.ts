import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { get } from 'http';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService
    ){}

    @Get()
    async getAll() : Promise<TaskDto[]>{
        return this.tasksService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<TaskDto>{
        return this.tasksService.getById(id);
    }

    @Post('create')
    async create(@Body() task: TaskDto): Promise<TaskDto> {
        return this.tasksService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: TaskDto): Promise<TaskDto> {
        return this.tasksService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.tasksService.delete(id);
    }
}
