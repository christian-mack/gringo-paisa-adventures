import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthStore } from "@/hooks/state/authStore";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function EventList() {
  const [events, setEvents] = useState<Schema["Event"][]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data: events, errors } = await client.models.Event.list();
      setEvents(events);
    } catch (error) {
      console.log(`Error finding events. ERROR :: ${error}`);
    }
  };

  console.log(events);

  return (
    <div>
      <h1>Events</h1>

      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}
