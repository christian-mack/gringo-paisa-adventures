"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUp } from "@aws-amplify/auth";
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
import { redirect } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type SignUpParameters = {
  username: string;
  password: string;
  birthdate: string;
  phone_number: string;
};

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
  birthdate: z.string(),
  phone_number: z.string(),
});

function SignUp() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      birthdate: "",
      phone_number: "",
    },
  });

  async function handleSignUp({
    username,
    birthdate,
    password,
    phone_number,
  }: SignUpParameters) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            birthdate,
            phone_number, // E.164 number convention
          },
          autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        },
      });

      console.log(userId, isSignUpComplete, nextStep);
      nextStep.signUpStep === "CONFIRM_SIGN_UP" &&
        redirect("/sign-up/confirmation");
    } catch (error) {
      console.log("error signing up:", error);
      toast({
        title: "Error signing up",
        description: `${error}`,
        variant: "destructive",
      });
    }
  }

  return (
    <main>
      <h1>Sign up page</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-8">
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
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your birthdate address"
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Create a password for your account"
                    type="password"
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
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
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
