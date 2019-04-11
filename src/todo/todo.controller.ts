import { Todo } from './../dto/todo';
import { TodoService } from './todo.service';
import {
  Controller,
  Get,
  Req,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): Observable<Todo[]> {
    return of(this.todoService.findAll());
  }
  @Get(':id')
  findOne(@Param('id') id): Todo {
    return { id, title: `This action returns a #${id} todo` };
  }
  @Post()
  async create(@Body() todo: Todo) {
    this.todoService.create(todo);
    return todo;
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodo: Todo): Todo {
    return { id, title: `${updateTodo.title}, id: #${id} todo` };
  }

  @Delete(':id')
  remove(@Param('id') id: number): Todo {
    return { id, title: `This action removes a #${id} todo` };
  }
}
