export type DataItem = {
  id: number;
  date: string;
  status: string;
  title: string;
  value: number;
}[];

export type MonthComponentProps = {
  id: number;
  label: string;
  value: string;
}[];
export const data: DataItem = [
  {
    id: 1,
    date: "26/10/2023",
    status: "Entrada",
    title: "Venda do apartamento",
    value: 20000000,
  },
  {
    id: 2,
    date: "26/10/2023",
    status: "Saída",
    title: "Pagamento de boleto",
    value: 55890,
  },
  {
    id: 3,
    date: "26/10/2023",
    status: "Saída",
    title: "Pagamento Netflix",
    value: 3989,
  },
  {
    id: 4,
    date: "26/10/2023",
    status: "Entrada",
    title: "Curso vendido",
    value: 30000,
  },
  {
    id: 5,
    date: "26/10/2023",
    status: "Saída",
    title: "Compra de micro-ondas",
    value: 200000,
  },
  {
    id: 6,
    date: "26/10/2023",
    status: "Entrada",
    title: "Freelance",
    value: 86699,
  },
  {
    id: 7,
    date: "26/10/2023",
    status: "Entrada",
    title: "Empréstimo",
    value: 20000,
  },
  {
    id: 8,
    date: "26/10/2023",
    status: "Saída",
    title: "Aluguel",
    value: 100000,
  },
  {
    id: 9,
    date: "26/10/2023",
    status: "Entrada",
    title: "Pagamento",
    value: 600000,
  },
  {
    id: 10,
    date: "26/10/2023",
    status: "Saída",
    title: "Compra de moto",
    value: 900000,
  },
  {
    id: 11,
    date: "26/10/2023",
    status: "Entrada",
    title: "Compra de Roupas",
    value: 34000,
  },
  {
    id: 12,
    date: "26/10/2023",
    status: "Entrada",
    title: "Compra de Roupas",
    value: 400000,
  },
];

export const dataMonth: MonthComponentProps = [
  {
    id: 1,
    label: "Janeiro",
    value: "janeiro"
  },
  {
    id: 2,
    label: "Fevereiro",
    value: "fevereiro"
  },
  {
    id: 3,
    label: "Março",
    value: "março"
  },
  {
    id: 4,
    label: "Abril",
    value: "abril"
  },
  {
    id: 5,
    label: "Maio",
    value: "maio"
  },
  {
    id: 6,
    label: "Junho",
    value: "junho"
  },
  {
    id: 7,
    label: "Julho",
    value: "julho"
  },
  {
    id: 8,
    label: "Agosto",
    value: "agosto"
  },
  {
    id: 9,
    label: "Setembro",
    value: "setembro"
  },
  {
    id: 10,
    label: "Outubro",
    value: "outubro"
  },
  {
    id: 11,
    label: "Novembro",
    value: "novembro"
  },
  {
    id: 12,
    label: "Dezembro",
    value: "dezembro"
  },
];