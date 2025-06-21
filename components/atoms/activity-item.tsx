import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ActivityItemProps {
  name: string
  email: string
  amount: string
  avatar?: string
}

export function ActivityItem({ name, email, amount, avatar }: ActivityItemProps) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar || "/placeholder.svg"} alt="Avatar" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">{amount}</div>
    </div>
  )
}
