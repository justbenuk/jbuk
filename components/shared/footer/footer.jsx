export default function Footer() {
  const copy = new Date().getFullYear()

  return (
    <footer>
      <div className="border-t py-2 flex flex-row items-center justify-center">
        <p className="text-xs justify-center">&copy; {copy} All rights reserved | Ben Andrews</p>
      </div>
    </footer>
  )
}

