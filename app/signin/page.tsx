"use client";

import React from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Sign = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button variant="outline" className="rounded-md border-none bg-blue-500 text-white hover:bg-blue-600">
            Se connecter
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
    </>
  );
};

export default Sign;
