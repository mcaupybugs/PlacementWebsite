import PlacementExperience from "./PlacementExperienceSchema";

class PlacementExperienceQueueModel extends PlacementExperience implements QueueBaseModel {
    operation: QueueOperationType;
    constructor(id: number, summary: string, rating: number, operation: QueueOperationType) {
        super(id, summary, rating);
        this.operation = operation;
    }
}

export default PlacementExperienceQueueModel