import { Todo } from './../dto/todo';
import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('todo')
export class TodoController {
    @Get()
    findAll(): Observable<Todo[]> {
        return of([{id: 0, title: 'David Bowie'}]);
      }
    @Get(':id')
    findOne(@Param('id') id): string {
        return `This action returns a #${id} todo`;
    }
    @Post()
    async create(@Body() todo: Todo) {
        return 'adding new todo: ' + todo.title;
    }
}
