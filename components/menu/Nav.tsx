import Link from "next/link";
import { AuthContext } from "./Auth";
import { Button } from "../inputs/Button";
import { useContext } from "react";


export function Nav() {
  const authContext = useContext(AuthContext);
  
  return (
    <div>
      <div className="flex w-full items-center justify-between px-10 py-5 md:w-auto md:rounded-full">
        <Link href="/">
          <img src="/hume-logo.svg" alt="logo" width={100} />
        </Link>

        {/* <div className="text-xs hidden md:block lg:text-sm">
          <NavItem route="/" name="Home" />
          <NavItem route="/face" name="Facial Expression" />
          <NavItem route="/burst" name="Vocal Burst" />
          <NavItem route="/prosody" name="Speech Prosody" />
          <NavItem route="/language" name="Written Language" />
        </div> */}
        
          <Button
            className="absolute right-8 w-40 text-center text-sm"
            text="Stop Session"
            onClick={authContext.unauthenticate}
            tooltip="Log out"
          />

      </div>

      <div className="w-full border-b-2 border-neutral-200"></div>
    </div>
  );
}

type NavItemProps = {
  route: string;
  name: string;
};

function NavItem({ route, name }: NavItemProps) {
  return (
    <Link href={route} className="mr-2 py-2 rounded-full px-3 hover:bg-neutral-200 duration-200 hover:ease-linear">
      <div className="block font-medium text-neutral-800 md:inline-block">{name}</div>
    </Link>
  );
}
