import { Constants } from '../configs/constants';
import db from '../configs/databaseInit';
import PlacementExperience from '../models/PlacementExperienceSchema';

export var getExperience = async (): Promise<PlacementExperience[]> => {
    var placementExperiences: PlacementExperience[] = [];

    var query: string = Constants.GET_EXPERIENCE_QUERY;
    await db.each(query, (err, row: any) => {
        if (err) {
            throw err;
        }
        console.log(query);
        console.log(row);
        var placementExperience: PlacementExperience = new PlacementExperience(row.id, row.summary, row.rating);
        placementExperiences.push(placementExperience);
        console.log(placementExperiences);
    })
    return placementExperiences;
}

export var addExperience = (placementExperience: PlacementExperience) => {
    var insertQuery: string = Constants.INSERT_EXPERIENCE_QUERY.replace('0', `'${placementExperience.summary}'`);
    insertQuery = insertQuery.replace('1', placementExperience.rating.toString());
    db.each(insertQuery, (err, row: any) => {
        if (err) {
            throw (err);
        }
    })
}