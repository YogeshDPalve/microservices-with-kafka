import { kafka } from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting ....");
  admin.connect();
  console.log("admin connection success....");

  console.log("Creating Topic []");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2, //[0,1]
      },
    ],
  });
  console.log("Topic created successfully");

  console.log("Disconnecting admin ");
  await admin.disconnect();
}
init();
