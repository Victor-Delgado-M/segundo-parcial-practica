import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ConceptoInversionService } from '../services/concepto-inversion.service';
import { ConceptoInversion } from '../entities/concepto-inversion.entity';
import { CreateConceptoInversionInput } from '../dto/create-concepto-inversion.dto';
import { UpdateConceptoInversionInput } from '../dto/update-concepto-inversion.dto';

@Resolver(() => ConceptoInversion)
export class ConceptoInversionResolver {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  @Query(() => [ConceptoInversion], { name: 'conceptoInversiones' })
  async findAll(): Promise<ConceptoInversion[]> {
    return this.conceptoInversionService.findAll();
  }

  @Query(() => ConceptoInversion, { name: 'conceptoInversion' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<ConceptoInversion> {
    return this.conceptoInversionService.findOne(id);
  }

  @Mutation(() => ConceptoInversion)
  async createConceptoInversion(
    @Args('input') input: CreateConceptoInversionInput
  ): Promise<ConceptoInversion> {
    return this.conceptoInversionService.create(input);
  }

  @Mutation(() => ConceptoInversion)
  async updateConceptoInversion(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') input: UpdateConceptoInversionInput
  ): Promise<ConceptoInversion> {
    return this.conceptoInversionService.update(id, input);
  }

  @Mutation(() => ConceptoInversion)
  async deleteConceptoInversion(@Args('id', { type: () => ID }) id: number): Promise<ConceptoInversion> {
    return this.conceptoInversionService.delete(id);
  }
}
