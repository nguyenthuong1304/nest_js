import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryDTO)
  async createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput): Promise<CategoryDTO> {
    const cate = await this.categoryService.create(createCategoryInput);

    return plainToClass(CategoryDTO, cate);
  }

  @Query(() => [CategoryDTO])
  async categories(): Promise<CategoryDTO[]> {
    const result = await this.categoryService.findAll();

    return plainToClass(CategoryDTO, result);
  }

  @Query(() => CategoryDTO)
  async category(@Args('id', { type: () => String }) id: string) {
    return await this.categoryService.findOne(id);
  }

  @Mutation(() => CategoryDTO)
  async updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput): Promise<CategoryDTO> {
    const result = await this.categoryService.update(updateCategoryInput.id, updateCategoryInput);

    return plainToClass(CategoryDTO, result);
  }

  @Mutation(() => CategoryDTO)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
