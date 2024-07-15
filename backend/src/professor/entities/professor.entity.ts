import { ApiProperty } from "@nestjs/swagger";
import { Professor } from "@prisma/client";

export class ProfessorEntity implements Professor {
    id_professor: number;
    nome: string;
    data_nascimento: Date;
    data_criacao: Date;
    updatedAt: Date;
}
