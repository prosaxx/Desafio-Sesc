import { Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MatriculaService {
  constructor(private prisma: PrismaService) {}
  create(createMatriculaDto: CreateMatriculaDto) {
    return this.prisma.matricula.create({ data: createMatriculaDto });  
  }

  findAll() {
    return this.prisma.matricula.findMany({  });
  }

  findOne(id: number) {
    return this.prisma.matricula.findUnique({ where: { id_matricula: id } });
  }

  update(id: number, updateMatriculaDto: UpdateMatriculaDto) {
    return this.prisma.matricula.update({ where: { id_matricula : id }, data: {
      id_curso: updateMatriculaDto.id_curso,
      id_aluno: updateMatriculaDto.id_aluno
  } });  
}

  remove(id: number) {
    return this.prisma.matricula.delete(
      {
      where: { id_matricula: id }
  });  }
}
