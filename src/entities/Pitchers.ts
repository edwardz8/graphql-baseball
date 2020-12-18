import { Field, ObjectType, ID } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn
} from "typeorm";

@ObjectType()
@Entity()
export class Pitchers extends BaseEntity {
  
  @Field(() => ID)
  @PrimaryColumn()
  playerid: number;

  @Field(() => String)
  @Column()
  player: string;

  @Field(() => String)
  @Column()
  team: string;

  @Field({nullable: true})
  @Column()
  positions: string;

  @Field({nullable: true})
  @Column()
  innings_pitched: number;

  @Field({nullable: true})
  @Column()
  strikeouts: number;

  @Field({nullable: true})
  @Column()
  wins: number;

  @Field({nullable: true})
  @Column()
  saves: number;

  @Field({nullable: true})
  @Column()
  era: number;

  @Field({nullable: true})
  @Column()
  whip: number;

  @Field({nullable: true})
  @Column()
  earned_runs: number;

  @Field({nullable: true})
  @Column()
  hits: number;

  @Field({nullable: true})
  @Column()
  walks: number;

  @Field({nullable: true})
  @Column()
  home_runs_allowed: number;

  @Field({nullable: true})
  @Column()
  games: number;

  @Field({nullable: true})
  @Column()
  games_started: number;

  @Field({nullable: true})
  @Column()
  losses: number;

  @Field({nullable: true})
  @Column()
  complete_games: number;
}