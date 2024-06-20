import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InversionistaModule } from './modules/inversionista.module';
import { ConceptoInversionModule } from './modules/concepto-inversion.module';
import { InversionModule } from './modules/inversion.module';
import { ConfigModule } from '@nestjs/config';
import { ConceptoInversion } from './entities/concepto-inversion.entity'; 
import { Inversionista} from './entities/inversionista.entity'; 
import { Inversion} from './entities/inversionrealizada.entity';
@Module({
  imports: [
    ConfigModule.forRoot(), // Configuración de variables de entorno
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [ ConceptoInversion,Inversionista,Inversion], // Lista de entidades importadas
      synchronize: true, // Sincronización automática de esquema (solo para desarrollo)
    }),
    InversionistaModule,
    ConceptoInversionModule,
    InversionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

