type Props = {
  title: string
  description: string
}
export default function SectionTitle({ title, description }: Props) {
  return (
    <div className=" max-w-3xl mx-auto flex flex-col items-center justify-center mt-24">
      <h1 className="text-4xl font-semibold capitalize">{title}</h1>
      <span className="border-b-4 w-20 pt-4 border-green-500"></span>
      <p className="py-4 text-center">{description}</p>
    </div>
  )
}
