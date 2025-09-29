/** * Este arquivo de configuração do Next.js ajusta o comportamento da aplicação em diversos aspectos, como desempenho, otimização e regras de desenvolvimento.
 * * - `reactStrictMode` e `swcMinify`: Ativam o "modo estrito" do React para ajudar a identificar problemas e usam o SWC (uma ferramenta de minificação mais rápida) para otimizar o código.
 * - `experimental`: Inclui configurações experimentais para otimizar a importação de bibliotecas populares como `lucide-react` e `@radix-ui/react-icons`, o que pode reduzir o tempo de carregamento.
 * - `images`: Configurações de otimização de imagens, permitindo o carregamento de imagens de domínios específicos e usando formatos modernos como WebP. A opção `unoptimized: true` desabilita a otimização de imagem padrão do Next.js, mantendo o arquivo como está.
 * - `compiler`: Remove todas as chamadas `console.log` do código em ambientes de produção, ajudando a manter o código limpo e o desempenho.
 * - Otimizações de Servidor: Desabilita o cabeçalho "X-Powered-By" (`poweredByHeader`), comprime os arquivos para transferência mais rápida (`compress`), e desativa a geração de ETags (`generateEtags`) para melhorar a performance.
 * - `eslint` e `typescript`: Ignoram erros de linting e de TypeScript durante a fase de build, o que pode ser útil para equipes que desejam implantar a aplicação mesmo com avisos, mas não é recomendado para projetos grandes.
 * - `env`: Permite que a variável de ambiente `NEXT_PUBLIC_API_URL` seja acessível no código do lado do cliente, facilitando a configuração da URL da API.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
  images: {
    domains: ["placeholder.svg"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

export default nextConfig
