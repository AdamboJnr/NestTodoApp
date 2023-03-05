import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoDto } from './dto';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService){}

    async addTodo(dto: TodoDto){
        try {
            // Add todo to the database
            const todo = await this.prisma.todo.create({
                data: {
                    name: dto.name,
                    isFav: dto.isFav
                }
            })

            return todo
        } catch (error) {
            return error.code
        }
    }

    async deleteTodo(id: number) {
        try {
            // Delete item from todo

            const todo = await this.prisma.todo.delete({
                where: { id: id },
            })

            return todo
        } catch (error) {
            return error.code
        }
    }

    async editTodo(id: number, dto: TodoDto) {
        try {
            // Update a specific todo

            const todo = await this.prisma.todo.update({
                where: { id },
                data: dto
            })

            return todo
        } catch (error) {
            return error.code
        }
    }

    async getTodos() {
        try {
            // Find All todos
            const todos = await this.prisma.todo.findMany({})

            return todos
        } catch (error) {
            console.log(error.code)    
        }
    }
}
