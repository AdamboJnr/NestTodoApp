import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoDto } from './dto';
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post('add')
    addTodo (@Body() dto: TodoDto ){
        console.log({ dto })
        return this.todoService.addTodo(dto);
    }

    @Get('all')
    getTodos(){
        return this.todoService.getTodos()
    }

    @Delete('delete/:id')
    deleteTodo(@Param('id') id: string){
        return this.todoService.deleteTodo(+id)
    }

    @Patch('edit/:id')
    editTodo(@Param('id') id: string, @Body() dto: TodoDto){
        return this.todoService.editTodo(+id, dto)
    }
}
