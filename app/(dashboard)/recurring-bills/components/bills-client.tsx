"use client";

import BillsCard from "./BillsCard";
import SummaryCard from "./SummaryCard";
import { columns, BillColumnType } from "./columns";
import { recurringBills } from "@/constants";
import { BillsTable } from "./bills-table";

const BillsClient = () => {
  const formattedTransactions: BillColumnType[] = recurringBills.map(
    (transaction) => ({
      ...transaction,
      id: transaction.name,
      billTitle: transaction.name,
    })
  );

  return (
    <section className="flex max-lg:flex-col justify-between w-full gap-5">
      <div className="basis-[30%] w-full flex max-sm:flex-col lg:flex-col flex-grow h-fit gap-6">
        <BillsCard />
        <SummaryCard />
      </div>

      <div className="basis-[70%] flex-grow bg-white rounded-xl max-lg:px-4 p-10">
        <BillsTable columns={columns} data={formattedTransactions} />
      </div>
    </section>
  );
};

export default BillsClient;
