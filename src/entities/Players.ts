import { Field, ObjectType, ID } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn
} from "typeorm";


@ObjectType()
@Entity()
export class Players extends BaseEntity {
  
  @Field(() => ID)
  @PrimaryColumn()
  position: string;

  @Field(() => String)
  @Column()
  player: string;

  @Field(() => String)
  @Column()
  team: string;

  @Field({nullable: true})
  @Column()
  rushing_attempts: number;

  @Field({nullable: true})
  @Column()
  rushing_yards: number;

  @Field({nullable: true})
  @Column()
  rushing_td: number;

  @Field({nullable: true})
  @Column()
  receptions: number;

  @Field({nullable: true})
  @Column()
  reception_yards: number;

  @Field({nullable: true})
  @Column()
  reception_td: number;

  @Field({nullable: true})
  @Column()
  fl: number;

  @Field()
  @Column()
  projected_points: number;

  /* @Field()
  @Column()
  creatorId: number; */

 /*  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @OneToMany(() => Updoot, (updoot) => updoot.post)
  updoots: Updoot[]; */

  /* @Field(() => String)
  @CreateDateColumn()
  createdAt: Date; */
}