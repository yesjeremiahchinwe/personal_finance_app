import TransactionCard from "@/components/TransactionCard";
import { transactions } from "@/constants";
import { formatAmount } from "@/lib/utils";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface Props {
  budget: Budget;
}

const Expenses = ({ budget }: Props) => {
  const { category, maximum, spent, theme } = budget;
  const filteredTransactions = transactions
    .filter((transaction) => transaction.category === category)
    ?.slice(0, 3);

  return (
    <section className="min-h-[510px] bg-white rounded-xl py-8 px-6 xl:px-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: `${theme}` }}
          />
          <h4 className="text-xl font-semibold text-[#201F24]">{category}</h4>
        </div>

        <MoreHorizontal color="#B3B3B3" />
      </div>

      <p className="py-4 text-[#696868]">Maximum of {formatAmount(maximum)}</p>

      <div className="bg-[#F8F4F0] h-8 rounded-md w-full">
        <div
          className="h-8 rounded-md"
          style={{
            width: `calc(${spent >= maximum ? 100 : (spent / maximum) * 100}%)`,
            backgroundColor: `${theme}`,
          }}
        />
      </div>

      <div className="py-7 grid grid-cols-2">
        <div
          className="flex flex-col gap-2 rounded-sm px-5"
          style={{ borderLeft: `5px solid ${theme}` }}
        >
          <small className="text-base text-[#696868]">Spent</small>
          <small className="text-xl font-semibold text-[#201F24]">
            {formatAmount(spent)}
          </small>
        </div>

        <div
          className="flex flex-col gap-2 rounded-sm px-5"
          style={{ borderLeft: "5px solid #F8F4F0" }}
        >
          <small className="text-base text-[#696868]">Remaining</small>
          <small className="text-xl font-semibold text-[#201F24]">
            {formatAmount(spent >= maximum ? 0 : maximum - spent)}
          </small>
        </div>
      </div>

      <div className="bg-[#F8F4F0] min-h-[254px] mt-6 rounded-lg w-full px-4 sm:px-8 py-6">
        <div className="flex items-center justify-between w-full">
          <h5 className="text-lg text-[#201F24] font-semibold">
            Latest Spending
          </h5>
          <Link href="/transactions" className="flex items-center gap-2">
            See All <ChevronRight size={14} />
          </Link>
        </div>

        <TransactionCard transaction={filteredTransactions} />
      </div>
    </section>
  );
};

export default Expenses;
