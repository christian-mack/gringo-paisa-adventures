"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, deleteUser } from "@aws-amplify/auth";
import { useAuthStore } from "@/hooks/state/authStore";
import { useToast } from "../ui/use-toast";

const Header = () => {
  const { toast } = useToast();
  const user = useAuthStore((state) => state);

  async function handleSignOut() {
    try {
      await signOut();
      user.setUserAuth(false);
      toast({ title: "You have been signed out" });
    } catch (error) {
      console.log(error);
      toast({
        title: "There was a problem signing out",
        description: `${error}`,
        variant: "destructive",
      });
    }
  }

  async function handleDeleteUser() {
    try {
      await deleteUser();
      toast({ title: "User has been deleted" });
    } catch (error) {
      console.log(error);
      toast({
        title: "There was an error deleting your account",
        description: `${error}`,
        variant: "destructive",
      });
    }
  }

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="gringo paisa adventures logo"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          {!user.isAuthenticated && (
            <>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}

          {user.isAuthenticated && (
            <>
              <Button onClick={handleSignOut}>Logout</Button>
              <Button variant="destructive" onClick={handleDeleteUser}>
                Delete User
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
