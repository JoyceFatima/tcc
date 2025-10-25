import useSWR from 'swr';
// Assumindo que businessMetricsService é importado de um diretório de serviços
import { businessMetricsService } from '@/services/business-metrics'; // Este caminho é uma suposição

// Interface mínima baseada no uso em business-metrics.tsx
// Em um projeto real, isso provavelmente seria importado de um arquivo de tipos compartilhado ou DTO.
interface BusinessMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: string;
}

// Define a função fetcher fora do hook para evitar recriação em cada renderização
// e para lidar corretamente com o argumento 'key' do useSWR.
const fetcher = async (url: string) => {
  // A chave URL será algo como "/business/some-uuid/metrics"
  // Precisamos extrair o businessId dela.
  const parts = url.split('/');
  const businessId = parts[2]; // Assumindo que a estrutura da URL é /business/:businessId/metrics

  if (!businessId) {
    throw new Error('Business ID não encontrado na URL para buscar métricas.');
  }

  return businessMetricsService.getByBusinessId(businessId);
};

export function useBusinessMetrics(businessId: string) {
  const { data, error, isLoading, mutate } = useSWR(
    businessId ? `/business/${businessId}/metrics` : null,
    fetcher,
  );

  return {
    metrics: data as BusinessMetric[],
    isLoading,
    error,
    mutate,
  };
}