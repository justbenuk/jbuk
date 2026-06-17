import type { Metadata } from "next";
import UserList from "@/features/Authentication/companents/UserList";
import PageContainer from "@/components/shared/PageContainer";

export const metadata: Metadata = {
  title: "Users",
};

export default function UsersPage() {
  return (
    <PageContainer size="dashboard">
      <UserList />
    </PageContainer>
  );
}
