/*
Este arquivo define um hook do React chamado `useIsMobile` que detecta se a largura da janela do navegador é menor que um breakpoint definido, indicando um dispositivo móvel. O hook gerencia o estado `isMobile`, atualizando-o no momento em que o componente é montado e sempre que a janela é redimensionada. Ele utiliza o `matchMedia` da API do navegador para adicionar um listener de evento de mudança que reage a alterações na largura da tela, garantindo que o estado de "móvel" seja sempre preciso e reativo em tempo real, o que é fundamental para a renderização condicional de componentes em diferentes tamanhos de tela.
*/

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
