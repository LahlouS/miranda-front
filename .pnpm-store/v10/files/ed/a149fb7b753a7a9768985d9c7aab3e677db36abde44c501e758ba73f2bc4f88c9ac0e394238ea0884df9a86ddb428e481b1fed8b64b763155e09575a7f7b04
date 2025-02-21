import type { Adapter, DatabaseSession, DatabaseUser, UserId } from "lucia";
export declare class SQLiteAdapter implements Adapter {
    private controller;
    private escapedUserTableName;
    private escapedSessionTableName;
    constructor(controller: Controller, tableNames: TableNames);
    deleteSession(sessionId: string): Promise<void>;
    deleteUserSessions(userId: UserId): Promise<void>;
    getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]>;
    getUserSessions(userId: UserId): Promise<DatabaseSession[]>;
    setSession(databaseSession: DatabaseSession): Promise<void>;
    updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void>;
    deleteExpiredSessions(): Promise<void>;
    private getSession;
    private getUserFromSessionId;
}
export interface TableNames {
    user: string;
    session: string;
}
export interface Controller {
    execute(sql: string, args: any[]): Promise<void>;
    get<T>(sql: string, args: any[]): Promise<T | null>;
    getAll<T>(sql: string, args: any[]): Promise<T[]>;
}
