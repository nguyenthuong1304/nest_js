import { PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

import { EntityConstant } from '../constant/entity.constant';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({ precision: EntityConstant.TimePrecision })
  updated: Date;

  @CreateDateColumn({ precision: EntityConstant.TimePrecision })
  created: Date;

  @DeleteDateColumn({ type: 'timestamp', precision: EntityConstant.TimePrecision })
  deleted: Date;
}
