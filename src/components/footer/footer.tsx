export default function Footer() {
  const copyDate = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="py-2">
        <p className="text-center text-xs">&copy;{copyDate} | Ben Andrews</p>
      </div>
    </footer>
  )
}

