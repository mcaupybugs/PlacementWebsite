import express from 'express';
import PlacementExperience from '../models/PlacementExperienceSchema';
import { addExperience, getExperience } from '../operations/PlacementExperienceOperations';
const placementExperienceRouter = express.Router();

placementExperienceRouter.get('/', async (req: any, res: any) => {
    var dummyPlacementExperience: PlacementExperience = new PlacementExperience(1, 'yo', 4);
    addExperience(dummyPlacementExperience);
    var placementExperience: PlacementExperience[] = await getExperience();
    console.log(placementExperience);
})

export default placementExperienceRouter;