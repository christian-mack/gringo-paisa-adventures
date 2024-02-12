import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      {/* my tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper my-8">
        <Collection
          data={events}
          emptyTitle="No event tickets"
          emptyStateSubtext=`Looks like it's time to find some events!`
          collectionType="my_tickets"
          urlParamName="ordersPage"
          limit={3}
          page={1}
          totalPages={2}
        />
      </section> */}
      {/* my events */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Events</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper my-8">
        <Collection
          data={events}
          emptyTitle="No events created yet"
          emptyStateSubtext="Create your first event now!"
          collectionType="my_tickets"
          urlParamName="eventsPage"
          limit={3}
          page={1}
          totalPages={2}
        />
      </section> */}
    </>
  );
}
