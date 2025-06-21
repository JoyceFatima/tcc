import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <CardHeader>
        <CardTitle className="text-3xl text-center">404</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-muted-foreground text-center">Ops! Não encontramos a página que você procurou.</p>
      </CardContent>
    </div>
  )
}
