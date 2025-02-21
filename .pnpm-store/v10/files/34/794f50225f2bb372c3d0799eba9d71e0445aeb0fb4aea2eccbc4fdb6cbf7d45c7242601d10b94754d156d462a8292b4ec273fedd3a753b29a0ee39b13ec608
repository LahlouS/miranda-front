import { SQLiteAdapter } from "../base.js";
import type { TableNames } from "../base.js";
export declare class BunSQLiteAdapter extends SQLiteAdapter {
    constructor(db: Database, tableNames: TableNames);
}
interface Database {
    prepare(sql: string): Statement;
}
interface Statement {
    get(...args: any[]): unknown;
    all(...args: any[]): unknown;
    run(...args: any[]): unknown;
}
export {};
