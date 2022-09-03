import "reflect-metadata"
import { DataSource } from "typeorm"
import { Course } from "./entity/Course"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Course],
    migrations: [],
    subscribers: [],
})
