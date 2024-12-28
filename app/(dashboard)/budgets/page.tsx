import { Metadata } from "next";
import BudgetsComponent from "./components/BudgetsComponent";
import Expenses from "./components/Expenses";
import { budgets } from "@/constants";

export const metadata: Metadata = {
  title: "Budgets",
  description: "View all your budgets in one place",
};

const BudgetsPage = () => {
  return (
    <section className="flex max-lg:flex-col gap-6">
      <BudgetsComponent />

      <div className="basis-[55%] grid grid-cols-1 gap-5">
        {budgets.map((budget, index) => (
          <Expenses budget={budget} key={index} />
        ))}
      </div>
    </section>
  );
};

export default BudgetsPage;
