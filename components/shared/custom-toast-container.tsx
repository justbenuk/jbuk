'use client'
import { useTheme } from "next-themes"
import { ToastContainer } from "react-toastify"

export default function CustomToastContainer() {
  const { theme } = useTheme()

  return (
    <>
      <ToastContainer
        position="top-right"
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={true}
        theme={theme}
      />
    </>
  )
}

