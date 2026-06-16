"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { MediaProps } from "../MediaTypes";
import { FetchAllMedia } from "../MediaActions";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import ErrorCard from "@/components/shared/ErrorCard";
import AllMediaTable from "../Tables/AllMediaTable";

export default function MediaList() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState<MediaProps[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await FetchAllMedia();

        if (response.success && response.data) {
          setMedia(response.data);
        } else {
          setError(response.message ?? "Failed to fetch media");
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
