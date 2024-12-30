import { Metadata } from "next";
import BillsClient from "./components/bills-client";

export const metadata: Metadata = {
    title: "Recurring Bills",
    description: "View all your recurring bills in one place"
  };

const RecurringBillsPage = () => {
    return <BillsClient />
  }
  
  export default RecurringBillsPage