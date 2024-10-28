"use server";

import { signIn, signOut } from "@/libs/auth";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handeleLogout = async () => {
  await signOut({ redirectTo: "/" });
};
