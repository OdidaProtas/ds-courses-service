import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
type: "postgres",
  host: process.env.DREAMER_CODES_AUTH_DATABASE_HOST,
  port: Number(process.env.DREAMER_CODES_AUTH_DATABASE_PORT),
  username: process.env.DREAMER_CODES_DATABASE_USERNAME,
  password: process.env.DREAMER_CODES_DATABASE_PASSWORD,
  database: process.env.DREAMER_CODES_DATABASE,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/entity/**/*{.ts,.js}"],
  migrations: [__dirname + "/migration/**/*.ts"],
  subscribers: [],
});
