import type { Metadata } from "next";
import MessageList from "@/features/messages/components/MessageList";
import PageContainer from "@/components/shared/PageContainer";

export const metadata: Metadata = {
  title: "Messages",
};

export default function DashboardMessagePage() {
  return (
    <PageContainer size="dashboard">
      <MessageList />
    </PageContainer>
  );
}
