import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { revalidatePath } from "next/cache";

export async function getAuthenticatedUser() {
  try {
    const { userId, username } = await getCurrentUser();
    console.log(userId);
    return userId;
  } catch (error) {
    console.log(error);
  }
}
