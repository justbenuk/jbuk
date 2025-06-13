"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <Button
        variant={"default"}
        size={"lg"}
        className="bg-teal-500"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
