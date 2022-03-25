import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';

@Index(['name'], { unique: true, where: 'deleted IS NULL' })
@Entity('categories')
export class Category extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'name',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'slug',
  })
  slug: string;
}
