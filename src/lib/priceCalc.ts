// src/lib/priceCalc.ts

export const PRECO_PAO = 0.50;

export interface CalculationResult {
  subtotal: string;
  taxa: string;
  total: string;
}

export const calcularPedido = (quantidade: number, taxaEntrega: number): CalculationResult => {
  const subtotal = quantidade * PRECO_PAO;
  const totalGeral = subtotal + taxaEntrega;

  return {
    subtotal: subtotal.toFixed(2),
    taxa: taxaEntrega.toFixed(2),
    total: totalGeral.toFixed(2),
  };
};