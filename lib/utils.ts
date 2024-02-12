import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const awsclient = generateClient<Schema>();
