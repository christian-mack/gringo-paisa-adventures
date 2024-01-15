import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

// Now you should be able to make CRUDL operations with the
// Data client
async function fetchTodos() {
  const { data: todos, errors } = await client.models.Todo.list();
}

export { fetchTodos };
