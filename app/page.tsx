"use client";

import TodoList from "@/components/TodoList";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Home() {
  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <TodoList />
    </>
  );
}

export default withAuthenticator(Home);
