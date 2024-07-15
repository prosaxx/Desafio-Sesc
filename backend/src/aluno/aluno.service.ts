import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService) {}
  create(createAlunoDto: CreateAlunoDto) {
    return this.prisma.aluno.create({ data: createAlunoDto });  
  }

  findAll() {
    return this.prisma.aluno.findMany({  });
  }

  findOne(id: number) {
    return this.prisma.aluno.findUnique({ where: { id_aluno: id } });
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.prisma.aluno.update({ where: { id_aluno : id }, data: {
      nome: updateAlunoDto.nome,
      bairro: updateAlunoDto.bairro
  } });
  }

  remove(id: number) {
    return this.prisma.aluno.delete(
      {
      where: { id_aluno: id }
  });
  }
}
