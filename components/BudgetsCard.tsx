import { ChevronRight } from "lucide-react";
import Link from "next/link";
import DoughnutChart from "./DoughtnutChart";
import { formatAmount } from "@/lib/utils";
import { budgets } from "@/constants";

const BudgetsCard = () => {

  return (
    <section className="min-h-[410px] rounded-xl bg-white col-span-12 lg:col-span-5 row-span-2 p-5 sm:p-6">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Budgets</h3>
        <Link
          href="/budgets"
          className="text-xs text-[#696868] flex items-center gap-3"
        >
          <span>See Details</span>
          <ChevronRight size={14} color="#696868" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col xxl:flex-row items-center justify-center pt-12 gap-6 w-full">
        <DoughnutChart />

        <div className="grid lg:grid-cols-2 xxl:grid-cols-1 grid-cols-1 gap-y-5 gap-x-10">
          {budgets.map(({ category, maximum, theme }) => {
            const formattedValue = formatAmount(maximum);

            return (
              <div
                key={category}
                className={`border-l-[4px] ps-3`}
                style={{ borderColor: `${theme}` }}
              >
                <h6 className="text-[#696868] text-xs">{category}</h6>
                <h5 className="font-semibold pt-1">{formattedValue}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BudgetsCard;
