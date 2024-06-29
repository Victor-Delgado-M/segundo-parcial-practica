import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateInversionistaInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  apellido?: string;

  @Field({ nullable: true })
  email?: string;
}