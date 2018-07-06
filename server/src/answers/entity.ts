import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length, MinLength, IsInt } from "class-validator";
@Entity()
export default class Answer extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @IsString()
  @Length(5, 25)
  @Column("text")
  title: string;
  @IsString()
  @MinLength(10)
  @Column("text")
  answer: string;
  @IsInt()
  @Column("numeric")
  questionId: number;
}
