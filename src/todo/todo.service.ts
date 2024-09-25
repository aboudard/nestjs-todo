import { Injectable } from '@nestjs/common';
import { Todo } from 'src/dto/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'new todo',
        description: 'another one bites the dust',
        active: true,
      },
      {
        id: 2,
        title: 'other todo',
        description: 'this is the sound of C',
        active: false,
      },
    ];
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  find(id: number): Todo {
    return this.todos.find((item) => {
      return item.id == id;
    });
  }

  remove(id: number): void {
    this.todos = this.todos.filter((item) => {
      return item.id != id;
    });
  }
}
