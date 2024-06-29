import { InputType, Field, ID, Float } from '@nestjs/graphql';

@InputType()
export class UpdateInversionInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  nombre?: string;

  @Field(() => Float, { nullable: true })
  monto?: number;
}