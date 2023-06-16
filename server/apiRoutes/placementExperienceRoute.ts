import express from 'express';
import db from '../configs/databaseInit';
import { RunResult } from 'sqlite3';
const placementExperienceRouter = express.Router();

placementExperienceRouter.get('/', (req: any, res: any) => {
    db.run("CREATE TABLE IF NOT EXISTS EXPERIENCE (id INTEGER PRIMARY KEY, name TEXT)", (result: RunResult, err: any) => {
        console.log(result)
    });

    db.run("INSERT INTO EXPERIENCE (name) VALUES ('bar')")
    // Query data from the table
    db.each("SELECT id, name FROM EXPERIENCE", function (err, row: any) {
        console.log(row.name);
    });
    console.log("hit")
    res.send("Random homepage")
})

export default placementExperienceRouter;