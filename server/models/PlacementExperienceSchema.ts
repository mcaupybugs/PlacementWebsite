import BaseModel from "./interfaces/BaseModel";

class PlacementExperience implements BaseModel {
    id: number;
    summary: string;
    rating: number;
    constructor(id: number, summary: string, rating: number) {
        this.id = id;
        this.summary = summary;
        this.rating = rating;
    }
}

export default PlacementExperience;