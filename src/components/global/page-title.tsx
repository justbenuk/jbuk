export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-center py-20 uppercase font-semibold text-4xl">
      {title}
    </h1>
  );
}
