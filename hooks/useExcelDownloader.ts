"use client"

import { useState } from "react"
import * as XLSX from "xlsx"
import type { IDashboard } from "@/services/dashboard/interface"
import type { IBusiness } from "@/services/business/interface"
import { IBusinessType } from "@/services/business-type/interface"
import { ITargetAudience } from "@/services/target-audience/interface"

interface UseExcelDownloaderParams {
  dashboardData: IDashboard | null
  businessData: IBusiness | null
  fileName?: string
  // Adicionamos as listas para consulta
  businessTypes: IBusinessType[]
  targetAudiences: ITargetAudience[]
}

export function useExcelDownloader({
  dashboardData,
  businessData,
  fileName = "dashboard-report.xlsx",
  businessTypes,
  targetAudiences,
}: UseExcelDownloaderParams) {
  const [isDownloading, setIsDownloading] = useState(false)

  const formatAddress = (address: any): string => {
    if (!address) return "Não informado"
    if (typeof address === "string") return address
    return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, CEP: ${address.cep}`
  }

  const download = () => {
    if (!dashboardData || !businessData) {
      console.error("Dados do dashboard ou do negócio não estão disponíveis para download.")
      return
    }

    setIsDownloading(true)

    try {
      const wb = XLSX.utils.book_new()

      const businessTypeName =
        businessTypes.find((type) => type.id === businessData.businessTypeId)?.name || businessData.businessTypeId
      const targetAudienceName =
        targetAudiences.find((audience) => audience.id === businessData.targetAudienceId)?.name ||
        businessData.targetAudienceId

      const businessInfo = [
        ["Nome do Negócio", businessData.name],
        ["Descrição", businessData.description],
        ["Tipo", businessTypeName],
        ["Endereço", formatAddress(businessData.address)],
        ["Público-Alvo", targetAudienceName],
        ["Orçamento Mensal (R$)", businessData.budget],
      ]
      const wsBusiness = XLSX.utils.aoa_to_sheet(businessInfo)
      XLSX.utils.book_append_sheet(wb, wsBusiness, "Resumo do Negócio")

      const statsData = [
        ["Métrica", "Valor"],
        ["Score de Localização", dashboardData.stats.locationScore / 100],
        ["Fluxo Diário de Pessoas", dashboardData.stats.dailyFootfall],
        ["Compatibilidade com Público-Alvo", dashboardData.stats.targetAudienceCompatibility / 100],
        ["Concorrentes Próximos (500m)", dashboardData.stats.competitors],
      ]
      const wsStats = XLSX.utils.aoa_to_sheet(statsData)

      wsStats["B2"].z = "0%"
      wsStats["B4"].z = "0%"

      XLSX.utils.book_append_sheet(wb, wsStats, "Estatísticas")

      const formatInsightType = (type: "positive" | "warning" | "negative"): string => {
        const typeMap = {
          positive: "Positivo",
          warning: "Atenção",
          negative: "Negativo",
        }
        return typeMap[type] || type
      }

      const insightsData = dashboardData.insights.map((insight) => [
        insight.title,
        insight.description,
        formatInsightType(insight.type),
      ])
      insightsData.unshift(["Título", "Descrição", "Tipo"])
      const wsInsights = XLSX.utils.aoa_to_sheet(insightsData)
      XLSX.utils.book_append_sheet(wb, wsInsights, "Insights da IA")

      XLSX.writeFile(wb, fileName)
    } catch (error) {
      console.error("Erro ao gerar arquivo Excel:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return { isDownloading, download }
}
