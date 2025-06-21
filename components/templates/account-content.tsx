import { Header } from "@/components/organisms/header"
import { PersonalInfoCard } from "@/components/organisms/personal-info-card"
import { BusinessInfoEditCard } from "@/components/organisms/business-info-edit-card"

export function AccountContent() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1 space-y-6 p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Minha Conta</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e configurações da conta</p>
        </div>

        <PersonalInfoCard />

        <BusinessInfoEditCard />
      </main>
    </div>
  )
}
