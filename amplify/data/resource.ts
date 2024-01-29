import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// This interface should mirror the schema below
export interface EventType {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  createdAt: Date;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url: string;
}

const schema = a.schema({
  Event: a
    .model({
      imageUrl: a.string().required(),
      title: a.string().required(),
      description: a.string(),
      location: a.string(),
      price: a.string(),
      url: a.string(),
      createdAt: a.datetime(),
      startDateTime: a.datetime(),
      endDateTime: a.datetime(),
      isFree: a.boolean().default(false),
      // TODO: add ref to categories
      // TODO: add ref to organizer/user
    })
    .authorization([a.allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
