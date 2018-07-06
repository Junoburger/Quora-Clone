import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, MinLength } from "class-validator";
@Entity()
export default class Question extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @IsString()
  @MinLength(10)
  @Column("text")
  question: string;
}
