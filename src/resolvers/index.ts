import { Pitchers } from '../entities/Pitchers';
import { Resolver, Query, Arg, Int } from 'type-graphql';

@Resolver()
export class PitchersResolver {
    @Query(() => [Pitchers])
    pitchers() {
        return Pitchers.find()
    }

    @Query(() => Pitchers, { nullable: false })
    pitcher(@Arg("playerid", () => Int) playerid: number): Promise<Pitchers | undefined> {
        return Pitchers.findOne(playerid)
    }
}
