import ClientContainer from "@/components/shared/ClientContainer";
import AddPostForm from "@/features/posts/forms/AddPostForm";

export default async function AddPostPage() {
  return (
    <ClientContainer>
      <AddPostForm />
    </ClientContainer>
  );
}
