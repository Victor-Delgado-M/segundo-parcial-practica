import { EntityRepository, Repository } from 'typeorm';
import { InvestorEntity } from '../entities/InvestorEntity';

@EntityRepository(InvestorEntity)
export class InvestorDataSource extends Repository<InvestorEntity> {
  // Métodos específicos del repositorio del inversionista usando TypeORM
}
