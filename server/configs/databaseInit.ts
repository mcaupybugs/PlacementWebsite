import sqlite3 from "sqlite3";
import { Constants } from "./constants";

var db: sqlite3.Database = new sqlite3.Database('./tmp/database.db', (err) => {
    if (err) {
        throw err;
    }
});

// creating table
db.serialize(() => {
    // Creating the experience table
    db.run(Constants.CREATE_EXPERIENCE_TABLE_QUERY, (err: any, result: any) => {
        if (err) {
            throw err;
        }
        console.log("Created the table");
    })
})

export default db;


