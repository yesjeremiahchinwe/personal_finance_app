import { transactions } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  const firstFiveTransactions = transactions.slice(0, 5);

  return (
    <section className="min-h-[519px] rounded-xl bg-white col-span-12 lg:col-span-7 row-span-2 max-lg:order-8 pt-6 px-5 sm:px-8">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Transactions</h3>
        <Link
          href="/transactions"
          className="text-xs text-[#696868] flex items-center gap-3"
        >
          <span>View All</span>
          <ChevronRight size={14} color="#696868" />
        </Link>
      </div>

      <TransactionCard transaction={firstFiveTransactions} />
    </section>
  );
};

export default TransactionsList;
