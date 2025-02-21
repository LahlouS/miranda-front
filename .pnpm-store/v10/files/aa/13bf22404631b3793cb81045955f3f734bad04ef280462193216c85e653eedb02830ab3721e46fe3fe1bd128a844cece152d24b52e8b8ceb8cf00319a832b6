export class SQLiteAdapter {
    controller;
    escapedUserTableName;
    escapedSessionTableName;
    constructor(controller, tableNames) {
        this.controller = controller;
        this.escapedSessionTableName = escapeName(tableNames.session);
        this.escapedUserTableName = escapeName(tableNames.user);
    }
    async deleteSession(sessionId) {
        await this.controller.execute(`DELETE FROM ${this.escapedSessionTableName} WHERE id = ?`, [
            sessionId
        ]);
    }
    async deleteUserSessions(userId) {
        await this.controller.execute(`DELETE FROM ${this.escapedSessionTableName} WHERE user_id = ?`, [userId]);
    }
    async getSessionAndUser(sessionId) {
        const [databaseSession, databaseUser] = await Promise.all([
            this.getSession(sessionId),
            this.getUserFromSessionId(sessionId)
        ]);
        return [databaseSession, databaseUser];
    }
    async getUserSessions(userId) {
        const result = await this.controller.getAll(`SELECT * FROM ${this.escapedSessionTableName} WHERE user_id = ?`, [userId]);
        return result.map((val) => {
            return transformIntoDatabaseSession(val);
        });
    }
    async setSession(databaseSession) {
        const value = {
            id: databaseSession.id,
            user_id: databaseSession.userId,
            expires_at: Math.floor(databaseSession.expiresAt.getTime() / 1000),
            ...databaseSession.attributes
        };
        const entries = Object.entries(value).filter(([_, v]) => v !== undefined);
        const columns = entries.map(([k]) => escapeName(k));
        const placeholders = Array(columns.length).fill("?");
        const values = entries.map(([_, v]) => v);
        await this.controller.execute(`INSERT INTO ${this.escapedSessionTableName} (${columns.join(", ")}) VALUES (${placeholders.join(", ")})`, values);
    }
    async updateSessionExpiration(sessionId, expiresAt) {
        await this.controller.execute(`UPDATE ${this.escapedSessionTableName} SET expires_at = ? WHERE id = ?`, [Math.floor(expiresAt.getTime() / 1000), sessionId]);
    }
    async deleteExpiredSessions() {
        await this.controller.execute(`DELETE FROM ${this.escapedSessionTableName} WHERE expires_at <= ?`, [Math.floor(Date.now() / 1000)]);
    }
    async getSession(sessionId) {
        const result = await this.controller.get(`SELECT * FROM ${this.escapedSessionTableName} WHERE id = ?`, [sessionId]);
        if (!result)
            return null;
        return transformIntoDatabaseSession(result);
    }
    async getUserFromSessionId(sessionId) {
        const result = await this.controller.get(`SELECT ${this.escapedUserTableName}.* FROM ${this.escapedSessionTableName} INNER JOIN ${this.escapedUserTableName} ON ${this.escapedUserTableName}.id = ${this.escapedSessionTableName}.user_id WHERE ${this.escapedSessionTableName}.id = ?`, [sessionId]);
        if (!result)
            return null;
        return transformIntoDatabaseUser(result);
    }
}
function transformIntoDatabaseSession(raw) {
    const { id, user_id: userId, expires_at: expiresAtUnix, ...attributes } = raw;
    return {
        userId,
        id,
        expiresAt: new Date(expiresAtUnix * 1000),
        attributes
    };
}
function transformIntoDatabaseUser(raw) {
    const { id, ...attributes } = raw;
    return {
        id,
        attributes
    };
}
function escapeName(val) {
    return "`" + val + "`";
}
