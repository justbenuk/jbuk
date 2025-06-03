export default function Copy() {
  const copyDate = new Date().getFullYear()

  return (
    <div className="border-t p-2 text-center">
      <p className="text-xs font-semibold">&copy;{copyDate} | Ben Andrews</p>
    </div>
  )
}

