import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Logout from "@/components/Logout";
import { AuthGetCurrentUserServer } from "@/utils/amplify";

export default async function Header() {
  const user = await AuthGetCurrentUserServer();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-20">
          <Image
            src="/assets/images/logo.png"
            width={128}
            height={38}
            alt="gringo paisa adventures logo"
          />
        </Link>

        <MainNav />

        <div className="flex justify-end gap-3">
          {user ? (
            <Logout />
          ) : (
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          )}

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
