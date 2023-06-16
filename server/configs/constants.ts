export abstract class Constants {
    static readonly EXPERIENCE_TABLE_NAME = "EXPERIENCE";
    static readonly GET_EXPERIENCE_QUERY = `SELECT id, summary, rating from ${this.EXPERIENCE_TABLE_NAME}`;
    static readonly INSERT_EXPERIENCE_QUERY = `INSERT INTO EXPERIENCE (summary, rating) VALUES (0, 1)`;
    static readonly CREATE_EXPERIENCE_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS EXPERIENCE (id INTEGER PRIMARY KEY, summary TEXT, rating INTEGER)";
}