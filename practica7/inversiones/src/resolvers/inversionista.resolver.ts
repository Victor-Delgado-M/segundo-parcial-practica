import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inversionista } from '../entities/inversionista.entity';
import { InversionistaService } from '../services/inversionista.service';
import { CreateInversionistaInput } from '../dto/create-inversionista.dto';
import { UpdateInversionistaInput } from '../dto/update-inversionista.dto';

@Resolver(() => Inversionista)
export class InversionistaResolver {
  constructor(private readonly inversionistaService: InversionistaService) {}

  @Query(() => [Inversionista])
  async inversionistas(): Promise<Inversionista[]> {
    return this.inversionistaService.findAll();
  }

  @Query(() => Inversionista)
  async inversionista(@Args('id') id: number): Promise<Inversionista> {
    return this.inversionistaService.findOne(id);
  }

  @Mutation(() => Inversionista)
  async createInversionista(
    @Args('input') input: CreateInversionistaInput,
  ): Promise<Inversionista> {
    return this.inversionistaService.create(input);
  }

  @Mutation(() => Inversionista)
  async updateInversionista(
    @Args('id') id: number,
    @Args('input') input: UpdateInversionistaInput,
  ): Promise<Inversionista> {
    return this.inversionistaService.update(id, input);
  }

  @Mutation(() => Inversionista)
  async deleteInversionista(@Args('id') id: number): Promise<Inversionista> {
    return this.inversionistaService.delete(id);
  }
}
