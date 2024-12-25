import Card from "@/components/Card";
import { Metadata } from "next";
import PotsCard from "@/components/PotsCard";
import BudgetsCard from "@/components/BudgetsCard";
import TransactionsCard from "@/components/TransactionsCard";
import RecurringBillsCard from "@/components/RecurringBillsCard";

export const metadata: Metadata = {
  title: "Overview",
  description: "View all your dashboard activities in one place",
};

const OverviewPage = () => {
  const data: CardProps[] = [
    {
      title: "Current Balance",
      value: "4836.00",
    },
    {
      title: "Income",
      value: "3814.25",
    },
    {
      title: "Expenses",
      value: "1700.50",
    },
  ];
  return (
    <div className="[family-name:var(--font-geist-sans)] w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-5">
        {data.map(({ title, value }) => (
          <Card key={title} title={title} value={value} />
        ))}
      </section>

      <section className="my-8 grid grid-cols-12 gap-5">
        <PotsCard />
        <BudgetsCard />
        <TransactionsCard />
        <RecurringBillsCard />
      </section>
    </div>
  );
};

export default OverviewPage;
