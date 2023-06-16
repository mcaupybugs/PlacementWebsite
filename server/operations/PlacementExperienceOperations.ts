import { Constants } from '../configs/constants';
import db from '../configs/databaseInit';
import PlacementExperience from '../models/PlacementExperienceSchema';

export var getExperience = (callback: any) => {
    var placementExperiences: PlacementExperience[] = [];

    var query: string = Constants.GET_EXPERIENCE_QUERY;
    db.all(query, (err, rows: any) => {
        if (err) {
            return callback(err);
        }
        rows.forEach((row: any) => {
            var placementExperience: PlacementExperience = new PlacementExperience(row.id, row.summary, row.rating);
            placementExperiences.push(placementExperience);
        });
        return callback(null, placementExperiences);
    })
}

export var addExperience = (placementExperience: PlacementExperience, callback: any) => {
    var insertQuery: string = Constants.INSERT_EXPERIENCE_QUERY.replace('0', `'${placementExperience.summary}'`);
    insertQuery = insertQuery.replace('1', placementExperience.rating.toString());
    db.each(insertQuery, (err, row: any) => {
        if (err) {
            return callback(err);
        }
    })
}