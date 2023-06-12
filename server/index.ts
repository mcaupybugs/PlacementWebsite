import express from "express";
import placementExperienceRouter from './apiRoutes/placementExperienceRoute'


const app: any = express();
app.use("/experience", placementExperienceRouter);


app.get("/", (req, res) => {
    res.send("sample")
})
app.listen(3000, () => {
    console.log("Listening on 3000");
})