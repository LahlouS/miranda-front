import { SQLiteAdapter } from "../base.js";
export class BetterSqlite3Adapter extends SQLiteAdapter {
    constructor(db, tableNames) {
        super(new BetterSqlite3Controller(db), tableNames);
    }
}
class BetterSqlite3Controller {
    db;
    constructor(db) {
        this.db = db;
    }
    async get(sql, args) {
        return this.db.prepare(sql).get(...args);
    }
    async getAll(sql, args) {
        return this.db.prepare(sql).all(...args);
    }
    async execute(sql, args) {
        this.db.prepare(sql).run(...args);
    }
}
