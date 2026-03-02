import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";
import invariant from "tiny-invariant";

invariant(process.env.DATABASE_URL, "Database URL must be set");

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
