import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryDTO {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  slug: string;
}
