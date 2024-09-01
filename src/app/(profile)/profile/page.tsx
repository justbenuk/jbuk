import Authenticated from "@/components/security/authenticated";
import PageContainer from "@/components/page-sections/page-container";
import UserDetails from "@/components/user/user-details";
export default function ProfilePage() {
  return (
    <Authenticated>
      <div className="min-h-[70dvh]">
        <PageContainer>
          <div>
            <UserDetails />
          </div>
        </PageContainer>
      </div>
    </Authenticated>
  );
}
