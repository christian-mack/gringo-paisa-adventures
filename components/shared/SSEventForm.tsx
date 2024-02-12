import { cookiesClient } from "@/utils/amplify";
import { revalidatePath } from "next/cache";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default async function EventForm() {
  async function addEvent(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const location = data.get("location") as string;
    const imageUrl = data.get("imageUrl") as string;
    const category = data.get("category") as string;
    const price = data.get("price") as string;
    const url = data.get("url") as string;
    const file = data.get("image") as Blob;
    const startDateTime = data.get("startDateTime") as string;
    const endDateTime = data.get("endDateTime") as string;

    await cookiesClient.models.Event.create({
      title,
      description,
      location,
      imageUrl,
      category,
      price,
      url,
      startDateTime,
      endDateTime,
    });

    revalidatePath("/");
    redirect("/events");
  }

  return (
    <div>
      <form action={addEvent}>
        <Input type="text" name="title" placeholder="title" />
        <Input type="text" name="description" placeholder="description" />
        <Input type="text" name="location" placeholder="location" />
        <Input type="text" name="imageUrl" placeholder="imageUrl" />
        <Input type="text" name="category" placeholder="category" />
        <Input type="text" name="price" placeholder="price" />
        <Input type="text" name="url" placeholder="url" />
        <Input type="file" name="image" />
        <Input
          type="datetime-local"
          name="startDateTime"
          placeholder="startDateTime"
        />
        <Input
          type="datetime-local"
          name="endDateTime"
          placeholder="endDateTime"
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}
