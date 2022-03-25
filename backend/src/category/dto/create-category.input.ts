import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Unique } from 'src/decorators/unique.decorator';
import { Category } from '../category.entity';

@InputType()
export class CreateCategoryInput {
  @IsNotEmpty()
  @IsString()
  // @Unique(Category.name, { message: 'Tên này đã tồn tại' })
  @Field(() => String, { description: 'Example field (placeholder)' })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { description: 'Example field (placeholder)' })
  readonly slug: string;
}
