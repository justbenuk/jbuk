import Authenticated from "@/components/security/authenticated";
import PageContainer from "@/components/page-sections/page-container";
import ProfileDetails from "@/components/profile/profile-details";
export default function ProfilePage() {
  return (
    <Authenticated>
      <div className="min-h-[70dvh]">
        <PageContainer>
          <div>
            <ProfileDetails />
          </div>
        </PageContainer>
      </div>
    </Authenticated>
  );
}
