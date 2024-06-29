import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { InversionistaModule } from './modules/inversionista.module';
import { ConceptoInversionModule } from './modules/concepto-inversion.module';
import { InversionModule } from './modules/inversion.module';
import { Inversionista } from './entities/inversionista.entity';
import { ConceptoInversion } from './entities/concepto-inversion.entity';
import { Inversion } from './entities/inversion.entity';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'practica7',
      entities: [Inversion, Inversionista, ConceptoInversion],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true, // Habilita el Playground de GraphQL
      debug: true,
      context: ({ req }) => ({ req }),
    }),
    InversionistaModule,
    ConceptoInversionModule,
    InversionModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 