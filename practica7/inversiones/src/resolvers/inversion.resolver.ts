import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inversion } from '../entities/inversion.entity';
import { InversionService } from '../services/inversion.service';
import { CreateInversionInput } from '../dto/create-inversion.dto';
import { UpdateInversionInput } from '../dto/update-inversion.dto';

@Resolver(() => Inversion)
export class InversionResolver {
  constructor(private readonly inversionService: InversionService) {}

  @Query(() => [Inversion])
  async inversiones(): Promise<Inversion[]> {
    return this.inversionService.findAll();
  }

  @Query(() => Inversion)
  async inversion(@Args('id') id: number): Promise<Inversion> {
    return this.inversionService.findOne(id);
  }

  @Mutation(() => Inversion)
  async createInversion(
    @Args('input') input: CreateInversionInput,
  ): Promise<Inversion> {
    return this.inversionService.create(input);
  }

  @Mutation(() => Inversion)
  async updateInversion(
    @Args('id') id: number,
    @Args('input') input: UpdateInversionInput,
  ): Promise<Inversion> {
    return this.inversionService.update(id, input);
  }

  @Mutation(() => Inversion)
  async deleteInversion(@Args('id') id: number): Promise<Inversion> {
    return this.inversionService.delete(id);
  }
}
