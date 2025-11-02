export interface IAddress {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface IBusiness {
  id: string
  name: string
  businessTypeId: string
  description: string
  address: IAddress | string;
  targetAudienceId: string
  targetAudienceName?: string
  budget: number
}
