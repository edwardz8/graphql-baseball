import { Pitchers } from '../entities/Pitchers';
import { Resolver, Query, Arg, Int } from 'type-graphql';

@Resolver()
export class PitchersResolver {
    @Query(() => [Pitchers])
    pitchers() {
        return Pitchers.find()
    }

    @Query(() => Pitchers, { nullable: false })
    pitcher(@Arg("id", () => Int) id: number): Promise<Pitchers | undefined> {
        return Pitchers.findOne(id)
    }
}
