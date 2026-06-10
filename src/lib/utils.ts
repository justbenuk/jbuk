import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function imageSrc(src?: string | null, fallback = '/assets/profile.png') {
  if (!src) return fallback

  if (src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  return fallback
}
