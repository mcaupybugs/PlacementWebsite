import express from 'express';
const placementExperienceRouter = express.Router();

placementExperienceRouter.get('/', (req, res) => {
    console.log("hit")
    res.send("Random homepage")
})

export default placementExperienceRouter;