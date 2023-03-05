import { IsBoolean, IsBooleanString, IsNotEmpty, IsString } from "class-validator"

export class TodoDto{
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsBoolean()
    isFav: boolean
}