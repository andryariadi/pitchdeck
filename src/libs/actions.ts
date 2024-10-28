"use server";

import { signIn, signOut } from "@/libs/auth";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut({ redirectTo: "/" });
};
