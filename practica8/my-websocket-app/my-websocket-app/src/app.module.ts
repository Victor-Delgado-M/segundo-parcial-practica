import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConceptoInversionModule } from './modules/concepto-inversion.module';
import { InversionistaModule } from './modules/inversionista.module';
import { InversionModule } from './modules/inversion.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(), // Para configurar variables de entorno
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConceptoInversionModule,
    InversionistaModule,
    InversionModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
