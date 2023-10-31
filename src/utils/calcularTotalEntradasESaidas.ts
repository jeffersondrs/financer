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