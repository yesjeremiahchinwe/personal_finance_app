import { Metadata } from "next";
import { DataTable } from "./components/data-table";
import { columns, TransactionColumnType } from "./components/columns";
import { transactions } from "@/constants";

export const metadata: Metadata = {
  title: "Transactions",
  description: "View all your transactions in one place",
};

const TransactionsPage = () => {
  const formattedTransactions: TransactionColumnType[] = transactions.map((transaction) => ({
    ...transaction,
    id: transaction.name,
    sender: transaction.name,
  }))

  return (
    <section className="bg-white rounded-xl max-lg:px-4 p-10">
      <DataTable columns={columns} data={formattedTransactions} />
    </section>
  );
};

export default TransactionsPage;
