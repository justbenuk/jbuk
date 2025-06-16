import Link from 'next/link'
import ToggleMode from "../navbar/toggle-mode"

export default function Footer() {
  const copy = new Date().getFullYear()

  return (
    <footer>
      <div className="border-t py-2 flex flex-row items-center justify-between px-6">
        <p className="text-xs justify-center">&copy; {copy} All rights reserved | Ben Andrews</p>
        <div className='text-xs justify-end underline underline-offset-4'>
          <Link href={'/client'}>Client</Link>
        </div>
      </div>
      <ToggleMode />
    </footer>
  )
}

