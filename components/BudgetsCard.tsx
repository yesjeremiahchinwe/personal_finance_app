import { ChevronRight } from "lucide-react";
import Link from "next/link";
import DoughnutChart from "./DoughtnutChart";
import { formatAmount } from "@/lib/utils";

const BudgetsCard = () => {
  const budgets = [
    {
      title: "Entertianment",
      value: "50",
      bg: "#277C78"
    },
    {
      title: "Bills",
      value: "750",
      bg: "#82C9D7"
    },
    {
      title: "Dining Out",
      value: "75",
      bg: "#F2CDAC"
    },
    {
      title: "Personal Care",
      value: "100",
      bg: "#626070"
    },
  ]

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

      <div className="flex max-xl:flex-col items-center justify-center pt-12 gap-6 w-full">
        <DoughnutChart />

        <div className="grid max-xl:grid-cols-2 grid-cols-1 gap-y-5 gap-x-10">
          {budgets.map(({ title, value, bg }) => {
            const formattedValue = formatAmount(parseInt(value));

            return (
              <div
                key={title}
                className={`border-l-[4px] ps-3`}
                style={{ borderColor: `${bg}` }}
              >
                <h6 className="text-[#696868] text-xs">{title}</h6>
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
