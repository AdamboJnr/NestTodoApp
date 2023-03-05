import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(prisma: PrismaService){}

    addTodo(){
        return 'Todo Added'
    }

    deleteTodo() {
        return 'Deleted Todo'
    }

    editTodo() {
        return 'Edited Todo'
    }

    getTodos() {
        return 'Getting All Todos'
    }
}
