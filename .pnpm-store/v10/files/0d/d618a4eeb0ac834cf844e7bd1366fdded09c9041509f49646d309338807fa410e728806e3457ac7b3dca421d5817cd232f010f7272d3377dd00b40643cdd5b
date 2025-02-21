import { SQLiteAdapter } from "../base.js";
export class D1Adapter extends SQLiteAdapter {
    constructor(db, tableNames) {
        super(new D1Controller(db), tableNames);
    }
}
class D1Controller {
    db;
    constructor(db) {
        this.db = db;
    }
    async get(sql, args) {
        return await this.db
            .prepare(sql)
            .bind(...args)
            .first();
    }
    async getAll(sql, args) {
        const result = await this.db
            .prepare(sql)
            .bind(...args)
            .all();
        return result.results ?? [];
    }
    async execute(sql, args) {
        await this.db
            .prepare(sql)
            .bind(...args)
            .run();
    }
}
