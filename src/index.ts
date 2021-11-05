import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Students } from "./entities/Students";


const main = async () => {

    await createConnection({
        type: "mysql",
        database: "ostrom-server",
        username: "root",
        password: "password",
        logging: true,
        synchronize: false,
        entities: [Students]
    });

    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(
        "/graphql",
        graphqlHTTP({
        schema,
        graphiql: true
        })
    );
    app.listen(4000, () => console.log("Listening on port 4000"));
}

main().catch(err => console.error(err));