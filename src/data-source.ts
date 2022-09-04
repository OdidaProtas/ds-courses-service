import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: false,
  logging: false,
  entities: [__dirname + "/entity/**/*{.ts,.js}"],
  migrations: [__dirname + "/migration/**/*.ts"],
  subscribers: [],
});
