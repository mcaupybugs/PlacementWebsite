import amqp from 'amqplib';

export var connection: any;

var createQueue = async () => {
    connection = await amqp.connect("amqp://localhost:5672");
}


