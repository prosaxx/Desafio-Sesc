import { ApiProperty } from "@nestjs/swagger";
import {  IsNumber, IsString } from "class-validator";

export class CreateCursoDto{
    @ApiProperty() 
    id_curso: number;

    @ApiProperty()
    @IsString()  
    nome: string;

    @ApiProperty()
    @IsNumber()
    id_professor: number;

    @ApiProperty()  
    data_criacao: Date;
}


