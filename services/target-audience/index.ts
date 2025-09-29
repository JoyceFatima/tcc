/*
Este arquivo define o serviço `TargetAudienceService`, responsável por centralizar a lógica de comunicação com a API para obter informações sobre o público-alvo. A classe contém um único método assíncrono, `getAll`, que realiza uma requisição HTTP GET para a rota `/target-audience` utilizando uma instância do `axios` (`service`). O objetivo deste método é buscar e retornar uma lista de todos os tipos de público-alvo disponíveis no backend. A exportação de uma instância da classe (`targetAudienceService`) permite que outros módulos da aplicação acessem e utilizem essa funcionalidade de forma direta, mantendo o código organizado e facilitando a reutilização.
*/

import service from "@/configs/service.config"
import { ITargetAudience } from "./interface"

class TargetAudienceService {
  async getAll(): Promise<ITargetAudience[]> {
    const response = await service.get("/target-audience").then((res) => res.data)
    return response
  }
}

export const targetAudienceService = new TargetAudienceService()
