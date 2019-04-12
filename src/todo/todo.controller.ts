import { Todo } from './../dto/todo';
import { HttpExceptionFilter } from './../common/filter/http-exception.filter';
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
  HttpException,
  HttpStatus,
  UseFilters,
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
  async update(
    @Param('id') id: number,
    @Body() updateTodo: Todo,
  ): Promise<Todo> {
    return { id, title: `${updateTodo.title}, id: #${id} todo` };
  }

  @Delete(':id')
  @UseFilters(new HttpExceptionFilter())
  async remove(@Param('id') id: number): Promise<Todo> {
    // return { id, title: `This action removes a #${id} todo` };
    throw new HttpException(
      {
        error: 'Accès impossible : interdit',
        status: HttpStatus.FORBIDDEN,
      },
      403,
    );
  }
}
