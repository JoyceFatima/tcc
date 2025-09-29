/*
Este arquivo define o serviço `BusinessTypeService`, responsável por gerenciar as operações de comunicação com a API para tipos de negócio. A classe contém um único método assíncrono, `getAll`, que faz uma requisição HTTP GET para a rota `/business-type` usando uma instância do `axios` (`service`). O objetivo deste método é buscar e retornar uma lista de todos os tipos de negócio disponíveis no backend. A exportação de uma instância da classe (`businessTypeService`) permite que outros módulos da aplicação acessem e utilizem essa funcionalidade de forma direta e centralizada, mantendo o código organizado e facilitando a reutilização.
*/

import service from "@/configs/service.config"
import { IBusinessType } from "./interface"

class BusinessTypeService {
  async getAll(): Promise<IBusinessType[]> {
    const response = await service.get("/business-type").then((res) => res.data)
    return response
  }
}

export const businessTypeService = new BusinessTypeService()
