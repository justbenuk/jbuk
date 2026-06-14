import type { Metadata } from "next";
import ClientContainer from "@/components/shared/ClientContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Servers",
};

export default function ServerPage() {
  return (
    <ClientContainer>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Servers</CardTitle>
            <CardDescription>All Servers</CardDescription>
          </div>
          <Button asChild>
            <Link href={"/dashboard/servers/new"}>
              <PlusIcon />
              <span>Server</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </ClientContainer>
  );
}
