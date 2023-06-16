import { connection } from "../configs/rabbitmqConnect";
import PlacementExperienceQueueModel from "../models/PlacementExperienceQueueModel";

var pushExperience = async (placementExperience: PlacementExperienceQueueModel) => {
    var channel: any = await connection.createChannel();
    await channel.assertQueue("experience");
    await channel.sendToQueue("experience", Buffer.from(JSON.stringify(placementExperience)));
    await channel.close();
}

