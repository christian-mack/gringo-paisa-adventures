"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn, type SignInInput } from "@aws-amplify/auth";
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
import Image from "next/image";
import { useAuthStore } from "@/hooks/state/authStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

function Login() {
  const { toast } = useToast();
  const router = useRouter();
  const user = useAuthStore((state) => state);

  // sends user to the home page after they're authenticated
  useEffect(() => {
    user.isAuthenticated && router.push("/");
  });

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      isSignedIn && user.setUserAuth(true);
    } catch (error) {
      console.log("error signing in", error);
      toast({
        title: "Error signing in!",
        description: `${error}`,
        variant: "destructive",
        duration: 10000,
      });
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <section className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-center content-center">
        <h1 className="text-4xl text-center">Sign In</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignIn)}
            className="space-y-8 px-12"
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
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/pink_door.jpeg"
          alt="pink door"
          objectFit="cover"
          fill
        />
      </div>
    </section>
  );
}

export default Login;
