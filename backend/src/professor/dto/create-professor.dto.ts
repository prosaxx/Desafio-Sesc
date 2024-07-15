import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateProfessorDto {
    @ApiProperty() 
    id_professor: number;

    @ApiProperty() 
    @IsString()
    nome: string;

    @IsNotEmpty()
    @ApiProperty() 
    data_nascimento: Date;

    @ApiProperty() 
    data_criacao: Date;

    @ApiProperty() 
    updatedAt: Date;
}
