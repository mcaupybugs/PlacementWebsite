import BaseModel from "./interfaces/BaseModel";

class PlacementExperience implements BaseModel {
    id: number;
    summary: string;
    rating: number;
    constructor(id: number, summary: string, rating: number) {
        this.id = id;
        this.summary = summary;
        this.rating = rating;

        if (!this.validateRating(rating)) {
            throw new Error("Rating should be between 1 to 5");
        }
    }

    validateRating(rating: number): boolean {
        if (rating > 0 && rating < 6) {
            return true;
        }
        return false;
    }
}

export default PlacementExperience;