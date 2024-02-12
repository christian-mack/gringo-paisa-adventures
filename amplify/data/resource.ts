import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// This interface should mirror the schema below
export interface EventType {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  category: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url: string;
}

export interface CategoryType {
  name: string;
}

const schema = a.schema({
  Event: a
    .model({
      imageUrl: a.string().required(),
      title: a.string().required(),
      description: a.string(),
      location: a.string(),
      category: a.string(),
      price: a.string(),
      url: a.url(),
      startDateTime: a.datetime(),
      endDateTime: a.datetime(),
      isFree: a.boolean().default(false),
      // TODO: add ref to categories
      // TODO: add ref to organizer/user
    })
    .authorization([a.allow.public("iam").to(["read"]), a.allow.owner()]),
  Category: a
    .model({
      name: a.string().required(),
    })
    .authorization([a.allow.public("iam").to(["read"]), a.allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
