import express from 'express';
import PlacementExperience from '../models/PlacementExperienceSchema';
import { addExperience, getExperience } from '../operations/PlacementExperienceOperations';
const placementExperienceRouter = express.Router();

placementExperienceRouter.get('/', (req: any, res: any) => {
    getExperience((err: any, result: any) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
})

export default placementExperienceRouter;