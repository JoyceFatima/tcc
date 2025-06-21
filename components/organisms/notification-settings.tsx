"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, MessageSquare, TrendingUp } from "lucide-react"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailReports: true,
    pushNotifications: false,
    weeklyDigest: true,
    competitorAlerts: true,
    trafficChanges: false,
    scoreUpdates: true,
  })

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const notifications = [
    {
      key: "emailReports",
      title: "Relatórios por Email",
      description: "Receba relatórios semanais por email",
      icon: Mail,
    },
    {
      key: "pushNotifications",
      title: "Notificações Push",
      description: "Alertas em tempo real no navegador",
      icon: Bell,
    },
    {
      key: "weeklyDigest",
      title: "Resumo Semanal",
      description: "Resumo das principais métricas da semana",
      icon: MessageSquare,
    },
    {
      key: "competitorAlerts",
      title: "Alertas de Concorrência",
      description: "Notificações sobre novos concorrentes",
      icon: TrendingUp,
    },
    {
      key: "trafficChanges",
      title: "Mudanças no Tráfego",
      description: "Alertas sobre variações significativas no fluxo",
      icon: TrendingUp,
    },
    {
      key: "scoreUpdates",
      title: "Atualizações de Score",
      description: "Notificações quando o score de localização mudar",
      icon: TrendingUp,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Configurações de Notificação
        </CardTitle>
        <CardDescription>Escolha como e quando receber notificações</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.key} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <notification.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <Label htmlFor={notification.key} className="font-medium cursor-pointer">
                    {notification.title}
                  </Label>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              </div>
              <Switch
                id={notification.key}
                checked={settings[notification.key as keyof typeof settings]}
                onCheckedChange={() => handleToggle(notification.key)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
