import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { ProfessorModule } from './professor/professor.module';
import { MatriculaModule } from './matricula/matricula.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AlunoModule, CursoModule, ProfessorModule, MatriculaModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
