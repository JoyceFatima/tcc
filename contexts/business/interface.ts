import { IBusiness } from "@/services/business/interface"
import { IBusinessType } from "@/services/business-type/interface"
import { ITargetAudience } from "@/services/target-audience/interface"
import { Dispatch, SetStateAction } from "react"

export interface IBusinessContext {
  business: IBusiness | null
  originalBusiness: IBusiness | null
  businessTypes: IBusinessType[]
  targetAudiences: ITargetAudience[]
  isLoading: boolean
  isSaving: boolean
  error: string | null
  setBusiness: Dispatch<SetStateAction<IBusiness | null>>
  fetchBusiness: () => Promise<void>
  updateBusiness: () => Promise<void>
}
