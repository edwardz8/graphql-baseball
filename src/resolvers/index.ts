import { Players } from '../entities/Players';
import { Resolver, Query } from 'type-graphql';

@Resolver()
export class PlayersResolver {
    @Query(() => [Players])
        players() {
            return Players.find()
        }
    /* @Query(() => Players)
        getPlayer(@Arg("position") position: string) {
            return Players.findOne({ where: { position } })
        } */
}
