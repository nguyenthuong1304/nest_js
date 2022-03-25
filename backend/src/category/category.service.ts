import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>) {}

  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    throw new BadRequestException('haha');
    return await this.categoryRepo.save(createCategoryInput);
  }

  async findAll(): Promise<Category[]> {
    const cates = await this.categoryRepo.find();

    return cates;
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepo.findOneBy({ id })
    
    return category;
  }

  async update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<Category> {
    await this.categoryRepo.update(id, updateCategoryInput);
    const category = await this.findOne(id)

    return category;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
