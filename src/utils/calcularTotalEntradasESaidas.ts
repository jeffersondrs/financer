import { DataItem } from "../data/data";

export const calcularTotalEntradasESaidas = (data: DataItem) => {
  const totalEntradas = data
    .filter((item) => item.status === "Entrada")
    .reduce((total, item) => total + item.value, 0);

  const totalSaidas = data
    .filter((item) => item.status === "Saída")
    .reduce((total, item) => total + item.value, 0);

  return totalEntradas - totalSaidas;
};

export function formatCurrency(inputValue: string) {
  // Remove caracteres não numéricos (por exemplo, vírgulas e pontos)
  const numericValue = inputValue.replace(/[^0-9]/g, '');

  // Divide o valor em reais e centavos
  const reais = numericValue.slice(0, -2);
  const centavos = numericValue.slice(-2);

  // Formata o valor com separadores de milhar
  let formattedValue = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Adiciona a vírgula entre reais e centavos
  formattedValue = formattedValue + ',' + centavos;

  return formattedValue;
}