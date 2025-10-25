"use client"

import { useState } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

interface UsePdfDownloaderParams {
  elementId: string
  fileName?: string
}

export function usePdfDownloader({ elementId, fileName = "documento.pdf" }: UsePdfDownloaderParams) {
  const [isDownloading, setIsDownloading] = useState(false)

  const download = async () => {
    const content = document.getElementById(elementId)
    if (!content) {
      console.error(`Elemento com id "${elementId}" não encontrado.`)
      return
    }

    setIsDownloading(true)
    try {
      const canvas = await html2canvas(content, {
        width: content.scrollWidth,
        height: content.scrollHeight,
        scale: 2,
        useCORS: true,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdfWidth = 210 // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(fileName)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      // Aqui você pode adicionar um toast de erro para o usuário
    } finally {
      setIsDownloading(false)
    }
  }

  return { isDownloading, download }
}
