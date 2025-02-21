import { SQLiteAdapter } from "../base.js";
export class LibSQLAdapter extends SQLiteAdapter {
    constructor(db, tableNames) {
        super(new LibSQLController(db), tableNames);
    }
}
class LibSQLController {
    db;
    constructor(db) {
        this.db = db;
    }
    async get(sql, args) {
        const result = await this.db.execute({
            sql,
            args
        });
        return result.rows.at(0) ?? null;
    }
    async getAll(sql, args) {
        const result = await this.db.execute({
            sql,
            args
        });
        return result.rows;
    }
    async execute(sql, args) {
        await this.db.execute({
            sql,
            args
        });
    }
}
