export type DataItem = {
  id: number;
  date: string;
  status: string;
  title: string;
  value: number;
}[];

export type MonthComponentProps = {
  id: number;
  month: string;
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
    month: "Janeiro",
  },
  {
    id: 2,
    month: "Fevereiro",
  },
  {
    id: 3,
    month: "Março",
  },
  {
    id: 4,
    month: "Abril",
  },
  {
    id: 5,
    month: "Maio",
  },
  {
    id: 6,
    month: "Junho",
  },
  {
    id: 7,
    month: "Julho",
  },
  {
    id: 8,
    month: "Agosto",
  },
  {
    id: 9,
    month: "Setembro",
  },
  {
    id: 10,
    month: "Outubro",
  },
  {
    id: 11,
    month: "Novembro",
  },
  {
    id: 12,
    month: "Dezembro",
  },
];