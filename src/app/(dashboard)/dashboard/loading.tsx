import AdminUser from "@/components/security/admin-user";
export default function Loading() {
  return (
    <AdminUser>
      <div className="min-h-screen bg-glass flex flex-col items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </AdminUser>
  );
}
