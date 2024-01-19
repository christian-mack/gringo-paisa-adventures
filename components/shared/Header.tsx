"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, deleteUser } from "@aws-amplify/auth";

const Header = () => {
  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteUser() {
    try {
      await deleteUser();
    } catch (error) {
      console.log(error);
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
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button variant="destructive" onClick={handleDeleteUser}>
            Delete User
          </Button>
          <Button onClick={handleSignOut}>Logout</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
