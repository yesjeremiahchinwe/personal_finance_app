import { Metadata } from "next";
import TransactionClient from "./components/transactions-client";

export const metadata: Metadata = {
  title: "Transactions",
  description: "View all your transactions in one place",
};

const TransactionsPage = () => (
  <TransactionClient />
);

export default TransactionsPage;
