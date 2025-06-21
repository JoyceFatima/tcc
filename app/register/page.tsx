import { RegisterLayout } from "@/components/templates/register-layout"
import { RegisterForm } from "@/components/organisms/register-form"

export default function RegisterPage() {
  return (
    <RegisterLayout
      title="Cadastre-se no Meu Negócio"
      subtitle="Crie sua conta para começar a analisar a localização do seu negócio"
    >
      <RegisterForm />
    </RegisterLayout>
  )
}
