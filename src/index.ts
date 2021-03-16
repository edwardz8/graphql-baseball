import "reflect-metadata";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { Pitchers } from './entities/Pitchers'
import { PitchersResolver } from "./resolvers";

const main = async () => {
    createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "edwardz_8",
        password: "Baseball29",
        database: "baseball_2021",
        entities: [
            Pitchers
        ],
        synchronize: false,
        logging: true
    })

    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PitchersResolver],
            validate: false
        })
    })

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('server started on localhost:4000/graphql')
    })
}

main().catch((err) => {
    console.log(err)
})