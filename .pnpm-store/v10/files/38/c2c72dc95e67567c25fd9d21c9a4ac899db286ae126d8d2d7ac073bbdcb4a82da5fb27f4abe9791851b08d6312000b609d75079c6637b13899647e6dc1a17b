import { SQLiteAdapter } from "../base.js";
export class BunSQLiteAdapter extends SQLiteAdapter {
    constructor(db, tableNames) {
        super(new BunSQLiteController(db), tableNames);
    }
}
class BunSQLiteController {
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
