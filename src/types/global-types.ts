export type FinancePropsComponent = {
  name: string;
  status: string;
  value: number;
  date?: string;
};

export type ItemsProps = {
  title: string;
  value: number | string;
  date: string;
  status: string | null;
  month?: string;
};