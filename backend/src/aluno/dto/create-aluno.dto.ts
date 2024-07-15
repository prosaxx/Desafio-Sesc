import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
export class CreateAlunoDto {
    @ApiProperty()    
    id_aluno: number;

    @ApiProperty()
    @IsString()
    nome: string;

    @ApiProperty()
    @IsString()
    data_nascimento: Date;

    @ApiProperty()
    @IsString()
    logradouro: string;

    @ApiProperty()
    @IsString()
    numero: string;

    @ApiProperty()
    @IsString()
    bairro: string;

    @ApiProperty()
    @IsString()
    cidade: string;

    @ApiProperty()
    @IsString()
    estado: string;

    @ApiProperty()
    @IsString()
    data_criacao: Date;

    @ApiProperty()
    @IsString()
    cep: string;
}
