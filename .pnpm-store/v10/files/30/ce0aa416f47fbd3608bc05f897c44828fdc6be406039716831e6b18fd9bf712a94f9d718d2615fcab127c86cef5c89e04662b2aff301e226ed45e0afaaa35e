import { SQLiteAdapter } from "../base.js";
import type { TableNames } from "../base.js";
import type { D1Database as WorkerD1Database } from "@cloudflare/workers-types";
import type { D1Database as MiniflareD1Database } from "@miniflare/d1";
type D1Database = WorkerD1Database | MiniflareD1Database;
export declare class D1Adapter extends SQLiteAdapter {
    constructor(db: D1Database, tableNames: TableNames);
}
export {};
