import { GalleryVerticalEnd } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  }

  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground ${className}`}
    >
      <GalleryVerticalEnd className={sizeClasses[size]} />
    </div>
  )
}
