import { Matricula } from "@prisma/client";

export class MatriculaEntity implements Matricula {
    id_matricula: number;
    id_aluno: number;
    id_curso: number;
    data_criacao: Date;
}
