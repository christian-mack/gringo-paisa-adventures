"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { confirmSignUp, type ConfirmSignUpInput } from "@aws-amplify/auth";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

const formSchema = z.object({
  username: z.string(),
  confirmationCode: z.string(),
});

function SignUp() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      confirmationCode: "",
    },
  });

  async function handleSignUpConfirmation({
    username,
    confirmationCode,
  }: ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });

      isSignUpComplete && redirect("/");
    } catch (error) {
      toast({
        title: "Error confirming sign up",
        description: `${error}`,
        variant: "destructive",
      });
      console.log("error confirming sign up", error);
    }
  }

  return (
    <main>
      <h1>We need to verify your account!</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignUpConfirmation)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription>
                  {/* TODO: Render error message */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmationCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmation Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your confirmation code"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {/* TODO: Render error message */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}

export default SignUp;
