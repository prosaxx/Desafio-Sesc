import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}
  create(createProfessorDto: CreateProfessorDto) {
    return this.prisma.professor.create({ data: createProfessorDto });
  }

  findAll() {
    return this.prisma.professor.findMany({  });
  }

  findOne(id: number) {
    return this.prisma.professor.findUnique({ where: { id_professor: id } });
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.prisma.professor.update({ where: { id_professor : id }, data: {
      nome: updateProfessorDto.nome,
      data_nascimento: updateProfessorDto.data_nascimento
  } });
  }

  remove(id: number) {
    return this.prisma.aluno.delete(
      {
      where: { id_aluno: id }
  });
  }
}
