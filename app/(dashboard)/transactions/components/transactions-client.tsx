"use client";

import { useState } from "react";
import { columns, TransactionColumnType } from "./columns";
import { transactions } from "@/constants";
import { DataTable } from "./data-table";

const TransactionClient = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Transactions");

  const formattedTransactions: TransactionColumnType[] =
    selectedCategory === "All Transactions" || selectedCategory === ""
      ? transactions.map((transaction) => ({
          ...transaction,
          id: transaction.name,
          sender: transaction.name,
        }))
      : transactions
          .filter((data) => data.category === selectedCategory)
          .map((transaction) => ({
            ...transaction,
            id: transaction.name,
            sender: transaction.name,
          }));

  return (
    <section className="bg-white rounded-xl max-lg:px-4 p-10">
      <DataTable
        columns={columns}
        data={formattedTransactions}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  );
};

export default TransactionClient;
