import { Injectable } from '@nestjs/common';
import { Todo } from 'src/dto/todo';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  find(id: number): Todo {
    return this.todos.find(item => {
      return item.id == id;
    });
  }
}
