import { EventType } from "@/amplify/data/resource";
import { format } from "date-fns";
import { cookiesClient } from "@/utils/amplifyUtils";
import Image from "next/image";

export default async function EventDetailsPage({ params }: { params: any }) {
  // get data for the id passed from the url
  const { data: event } = await cookiesClient.models.Event.get({
    id: params.id,
  });

  // TODO: replace temporary imageUrl
  const fakeImageUrl = "https://picsum.photos/1000";

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:mx-w-7xl">
        <Image
          src={fakeImageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full m-h-[300px] object-cover object-center"
        />
        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? "FREE" : `$${event.price}`}
                </p>
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-gray-500">
                  {event.category}
                </p>
              </div>

              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by <span className="text-primary-500">{event.owner}</span>
              </p>
            </div>
          </div>

          {/* CHECKOUT BUTTON */}

          {/* DATE */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 md:gap-3">
              <Image
                src="/assets/icons/calendar.svg"
                alt="calendar"
                width={32}
                height={32}
              />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {event.startDateTime && format(event.startDateTime, "PPP")}
                </p>
                <p className="ml-1">
                  {event.endDateTime && format(event.endDateTime, "PPP")}
                </p>
              </div>
            </div>

            {/* LOCATION  */}
            <div className="p-regular-20 flex items-center gap-3">
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={32}
                height={32}
              />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-gray-600">{`What You'll Experience`}</p>
            <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
              {event.url}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
