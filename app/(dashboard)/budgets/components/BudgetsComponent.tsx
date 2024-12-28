import DoughnutChart from "@/components/DoughtnutChart";
import { budgets } from "@/constants";
import { formatAmount } from "@/lib/utils";

const BudgetsComponent = () => {
  return (
    <section className="min-h-[344px] lg:min-h-[599px] h-fit rounded-xl bg-white basis-[45%] p-5 sm:p-6 flex items-center justify-center">
      <div className="flex flex-col md:flex-row lg:flex-col max-lg:justify-center items-center lg:justify-start lg:items-start pt-12 gap-x-16 gap-y-12 w-full">
        <DoughnutChart />

        <div className="lg:pt-4 max-lg:basis-[50%] w-full max-lg:pr-4">
          <h3 className="text-[#201F24] text-2xl font-bold">Spending Summary</h3>

          <div className="flex-grow grid grid-cols-1 gap-x-10 pt-5">
            {budgets.map(({ category, maximum, spent, theme }) => {
              const formattedValue = formatAmount(spent);

              return (
                <div
                  key={category}
                  className={`border-b-[1px] border-b-[#F2F2F2] last:border-none ps-3 flex justify-between items-center w-full gap-3 py-4`}
                  style={{ borderLeftColor: `${theme}` }}
                >
                  <h6 className={`text-[#696868] flex items-center gap-4 before:w-[3px] before:h-6 text-sm ${category.includes("Entertainment") ? "before:bg-[#277C78]" : category.includes("Bills") ? "before:bg-[#82C9D7]" : category.includes("Dining") ? "before:bg-[#F2CDAC]" : "before:bg-[#626070]"}`}>{category}</h6>

                  <h5 className="font-semibold text-lg pt-1 flex items-center gap-1">{formattedValue} <span className="text-[#696868] text-sm font-normal lg:hidden xl:flex">Of {formatAmount(maximum)}</span></h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetsComponent;
