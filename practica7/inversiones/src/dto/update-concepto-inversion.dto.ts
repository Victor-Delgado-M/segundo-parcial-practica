import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateConceptoInversionInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field({ nullable: true })
  estado?: string;
}
