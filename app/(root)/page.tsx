import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: events, errors } = await cookiesClient.models.Event.list();
  const user = await AuthGetCurrentUserServer();

  console.log(user);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">{`Celebrate Colombia's Vibrant Culture. Experience the Beauty.`}</h1>
            <p className="p-regular-20 md:p-regular-24">
              Gringo Paisa Adventures curates immersive and culturally rich
              experiences, showcasing the best of Medellin.
            </p>
            <Button asChild size="lg" className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>

        <Collection
          data={events}
          emptyTitle="No events found"
          emptyStateSubtext="Come back later"
          collectionType="all_events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
