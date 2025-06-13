import ToggleMode from "../navbar/toggle-mode"

export default function Footer() {
  const copy = new Date().getFullYear()

  return (
    <footer>
      <div className="border-t py-2">
        <p className="text-xs text-center">&copy; {copy} All rights reserved | Ben Andrews</p>
      </div>
      <ToggleMode />
    </footer>
  )
}

