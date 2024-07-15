import { ApiProperty } from "@nestjs/swagger";
import { Aluno } from "@prisma/client";

export class AlunoEntity implements Aluno {
    id_aluno: number;
    nome: string;
    data_nascimento: Date;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    data_criacao: Date;
    cep: string;
}
