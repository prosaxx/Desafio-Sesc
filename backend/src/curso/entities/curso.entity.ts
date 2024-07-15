import { ApiProperty } from "@nestjs/swagger";
import { Curso } from "@prisma/client";

export class CursoEntity implements Curso {
    id_curso: number;
    nome: string;
    id_professor: number;
    data_criacao: Date;

}
