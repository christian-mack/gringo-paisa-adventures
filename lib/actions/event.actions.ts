import { EventType, Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { revalidatePath } from "next/cache";

export async function deleteEvent({
  eventId,
  path,
}: {
  eventId: string;
  path: string;
}) {
  try {
    const client = generateClient<Schema>();

    const { data: deletedEvent, errors } = await client.models.Event.delete({
      id: eventId,
    });
    revalidatePath("/");
    console.log(`Event deleted \n\n ${deletedEvent}`);
    return deleteEvent;
  } catch (error) {
    console.log("Error deleting the event", error);
  }
}

export async function updateEvent({
  eventId,
  updatedEventDetails,
}: {
  eventId: string;
  updatedEventDetails: EventType;
}) {
  try {
    const client = generateClient<Schema>();

    const newEventData = {
      id: eventId,
      ...updatedEventDetails,
    };

    const { data: updatedEvent, errors } = await client.models.Event.update(
      newEventData
    );
    console.log(updatedEvent);
  } catch (error) {
    console.log(`Update Event :: \n\n ${error}`);
  }
}
