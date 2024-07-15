import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsNumber } from "class-validator";

export class CreateMatriculaDto {
    @ApiProperty()
    id_matricula: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    id_aluno: number;

    @ApiProperty()
    @IsNumber()
    id_curso: number;

    @ApiProperty()
    data_criacao: Date;
}
