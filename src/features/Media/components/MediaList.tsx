"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FetchAllMedia } from "../MediaActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import AllMediaTable from "../Tables/AllMediaTable";
import { Media } from "@prisma/client";

export default function MediaList() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await FetchAllMedia();

        if (response.success && response.data) {
          setMedia(response.data);
        } else {
          setError("Failed to fetch Media");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch media");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorCard message={error} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Media Files</CardTitle>
        <CardDescription>
          All media files - Images/files/PDF&apos;s
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AllMediaTable medias={media} />
      </CardContent>
    </Card>
  );
}
