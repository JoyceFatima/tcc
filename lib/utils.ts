/*
Este arquivo define uma função utilitária chamada `cn` para combinar e gerenciar classes CSS no React.
Ele usa duas bibliotecas: `clsx` e `tailwind-merge`.
*/

/**
 * Combina classes de forma inteligente, resolvendo conflitos do Tailwind CSS.
 *
 * @param inputs Uma ou mais `ClassValue` (classes CSS) que podem ser strings, arrays,
 * objetos ou valores booleanos.
 * @returns Uma única string contendo as classes combinadas e livres de conflito.
 *
 * A função opera em duas etapas:
 * 1. `clsx(...inputs)`: Usa a biblioteca `clsx` para juntar todas as classes
 * fornecidas em uma única string, lidando com diferentes tipos de entrada
 * (por exemplo, ignorando `null`, `false` e objetos com valores falsos).
 *
 * 2. `twMerge(...)`: Usa a biblioteca `tailwind-merge` para processar a string
 * resultante. Esta é a parte inteligente: ela resolve conflitos de classes do Tailwind.
 * Por exemplo, se você passar as classes "p-4" e "p-6", ela vai entender que são
 * classes de preenchimento (padding) e manterá apenas a última, "p-6", que é a mais específica.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
