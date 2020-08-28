import "reflect-metadata";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { Players } from './entities/Players'
import { PlayersResolver } from "./resolvers";

const main = async () => {
    createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "edwardzzz",
        password: "Baseball29",
        database: "rosterbox",
        entities: [
            Players
        ],
        synchronize: false,
        logging: true
    })

    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PlayersResolver],
            validate: false
        })
    })

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    })
}

main().catch((err) => {
    console.log(err)
})