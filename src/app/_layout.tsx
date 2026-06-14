import { Stack} from "expo-router";
import "../gloabl.css"
import { AuthProvider } from "@/context/AuthProvider";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
