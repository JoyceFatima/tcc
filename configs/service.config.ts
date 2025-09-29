/*
Este arquivo configura uma instância do **Axios** para gerenciar requisições HTTP em uma aplicação web. Ele cria um cliente HTTP (`service`) que é pré-configurado com uma URL base, que pode ser definida por uma variável de ambiente (`NEXT_PUBLIC_API_URL`) ou, por padrão, aponta para um servidor local.

O ponto principal desta configuração é o **interceptor de requisições**. Antes de qualquer requisição ser enviada, este interceptor verifica se um token de autenticação está presente nos cookies do navegador. Se o token existir, ele é automaticamente adicionado ao cabeçalho `Authorization` da requisição, no formato `Bearer token`. Isso garante que todas as requisições para a API que exigem autenticação enviem o token de forma transparente e segura, simplificando o processo de comunicação com o backend e eliminando a necessidade de adicionar manualmente o token em cada chamada de API.
*/

import axios from "axios"
import Cookies from "js-cookie"

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/"

const service = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
})

service.interceptors.request.use((config) => {
  const token = Cookies.get("token")
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default service
