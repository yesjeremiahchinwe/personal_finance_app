import { Metadata } from "next";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { transactions } from "@/constants";

export const metadata: Metadata = {
    title: "Transactions",
    description: "View all your transactions in one place"
  };

const TransactionsPage = () => {

    return (
      <section className="bg-white rounded-xl p-10">
         <DataTable columns={columns} data={transactions} />
      </section>
    )
  }
  
  export default TransactionsPage