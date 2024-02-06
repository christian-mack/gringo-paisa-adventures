import { cookiesClient } from "@/utils/amplifyUtils";

export default async function EventList() {
  const { data: events } = await cookiesClient.models.Event.list();

  return (
    <div>
      <h1>Events</h1>

      <ul>
        {events &&
          events.map((event) => (
            <li key={event.id}>
              {event.id}
              <div>{event.title}</div>
              <div>{event.description}</div>
              <div>{event.location}</div>
              <div>{event.price}</div>
              <div>{event.createdAt}</div>
              <div>{event.startDateTime}</div>
              <div>{event.endDateTime}</div>
              <div>{event.isFree}</div>
              <div>{event.category}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
