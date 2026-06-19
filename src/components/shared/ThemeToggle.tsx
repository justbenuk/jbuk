"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          variant={"ghost"}
          size={"icon"}
        >
          <SunIcon className="size-4" />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          variant={"ghost"}
          size={"icon"}
        >
          <MoonIcon className="size-4" />
        </Button>
      )}
    </>
  );
}
