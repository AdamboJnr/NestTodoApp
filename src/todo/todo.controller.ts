import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TodoDto } from './dto';
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post('add')
    addTodo (@Body() dto: TodoDto ){
        console.log({ dto })
        return this.todoService.addTodo();
    }

    @Get('all')
    getTodos(){
        return this.todoService.getTodos()
    }

    @Delete('delete')
    deleteTodo(){
        return this.todoService.deleteTodo()
    }

    @Patch('edit')
    editTodo(){
        return this.todoService.editTodo()
    }
}
