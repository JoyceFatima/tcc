"use client"

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { useAuth } from "@/contexts/auth"
import { IBusiness, IAddress } from "@/services/business/interface"
import { IBusinessType } from "@/services/business-type/interface"
import { ITargetAudience } from "@/services/target-audience/interface"
import { businessService } from "@/services/business"
import { targetAudienceService } from "@/services/target-audience"
import { businessTypeService } from "@/services/business-type"
import { IBusinessContext } from "./interface"

const BusinessContext = createContext<IBusinessContext>({} as IBusinessContext)

const emptyAddress: IAddress = {
  street: '',
  number: '',
  neighborhood: '',
  city: '',
  state: '',
  cep: '',
};

const parseAddress = (addressString: string): IAddress => {
  if (!addressString) return emptyAddress;

  const parts = addressString.match(/(.+), (\d+) - (.+), (.+) - (.+), (\d{8})/);
  if (parts) {
    return {
      street: parts[1] || '',
      number: parts[2] || '',
      neighborhood: parts[3] || '',
      city: parts[4] || '',
      state: parts[5] || '',
      cep: parts[6] || '',
    };
  }
  return { ...emptyAddress, street: addressString };
};

const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const [business, setBusiness] = useState<IBusiness | null>(null)
  const [originalBusiness, setOriginalBusiness] = useState<IBusiness | null>(null)
  const [businessTypes, setBusinessTypes] = useState<IBusinessType[]>([])
  const [targetAudiences, setTargetAudiences] = useState<ITargetAudience[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBusiness = async () => {
    if (!user?.id) {
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      const [businessData, targetAudienceResult, businessTypeResult] = await Promise.all([
        businessService.getByOwnerId(user.id),
        targetAudienceService.getAll(),
        businessTypeService.getAll(),
      ])

      if (businessData) {
        businessData.address = parseAddress(businessData.address as string);
        const targetAudience = targetAudienceResult.find(
          (ta) => ta.id === businessData.targetAudienceId
        );
        if (targetAudience) {
          businessData.targetAudienceName = targetAudience.name;
        }
      } else {
        // Initialize with empty address if no business data
        setBusiness({ address: emptyAddress } as IBusiness);
      }

      setBusiness(businessData)
      setOriginalBusiness(businessData)
      setTargetAudiences(targetAudienceResult)
      setBusinessTypes(businessTypeResult)
      setError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ocorreu um erro desconhecido."
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const updateBusiness = async (updatedBusiness: IBusiness) => {
    if (!updatedBusiness) return

    setIsSaving(true)
    try {
      const { street, number, neighborhood, city, state, cep } = updatedBusiness.address as IAddress;
      const fullAddress = `${street}, ${number} - ${neighborhood}, ${city} - ${state}, ${cep}`;
      const businessToSave = { ...updatedBusiness, address: fullAddress };

      await businessService.update(businessToSave.id, businessToSave)
      setOriginalBusiness(updatedBusiness)
      toast.success("Informações do negócio salvas com sucesso!")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.")
      throw err // Re-throw to allow components to handle it
    } finally {
      setIsSaving(false)
    }
  }

  useEffect(() => {
    fetchBusiness()
  }, [user])

  const value = useMemo(
    () => ({
      business,
      setBusiness,
      originalBusiness,
      businessTypes,
      targetAudiences,
      isLoading,
      isSaving,
      error,
      fetchBusiness,
      updateBusiness,
    }),
    [business, originalBusiness, businessTypes, targetAudiences, isLoading, isSaving, error]
  )

  return <BusinessContext.Provider value={value}>{children}</BusinessContext.Provider>
}

export { BusinessProvider }
export const useBusiness = () => useContext(BusinessContext)
