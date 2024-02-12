"use client";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { EventType } from "@/amplify/data/resource";
import { awsclient } from "@/lib/utils";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  imageUrl: z.string(),
  price: z.string(),
  url: z.string(),
  category: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  isFree: z.boolean().default(false),
});

export default function EventForm() {
  const { toast } = useToast();

  async function handleSubmit({
    title,
    description,
    location,
    imageUrl,
    price,
    url,
    category,
    startDateTime,
    endDateTime,
    isFree,
  }: EventType) {
    try {
      const { errors, data: newEvent } = await awsclient.models.Event.create({
        title,
        description,
        imageUrl,
        location,
        price,
        url,
        category,
        isFree,
      });
      toast({
        title: "Event created!",
        description: `Event Id :: ${newEvent.id}`,
        duration: 10000,
      });
    } catch (error) {
      console.log("ERROR :: ", error);
      toast({
        title: "There was an error creating your event",
        description: `ERROR ::::=> ${error}`,
        variant: "destructive",
        duration: 10000,
      });
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      imageUrl: "",
      price: "",
      url: "",
      category: "",
      startDateTime: new Date(),
      endDateTime: new Date(),
      isFree: false,
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 px-12"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the title of your event"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the description for your eventw"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the location of your event"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a random url because this will change but its a required field"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the cost for your event. Price should be per person"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the URL for your event. This can be random for now. This should be generated for the user to share their event by link"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your event's category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* TODO: createdAt, startDateTime, endDateTime, and isFree */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
