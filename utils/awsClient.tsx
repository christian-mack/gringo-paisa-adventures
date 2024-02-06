import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

// Now you should be able to make CRUDL operations with the
// Data client
async function fetchEvents() {
  const { data: events, errors } = await client.models.Event.list();
  return { events, errors };
}

export { fetchEvents };
