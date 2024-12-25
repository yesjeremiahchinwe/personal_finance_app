import { formatAmount } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const RecurringBillsCard = () => {
  const recurringBills = [
    {
      title: "Paid Bills",
      amount: "190",
      color: "#277C78"
    },
    {
      title: "Total Upcoming",
      amount: "194.98",
      color: "#CAB361"
    },
    {
      title: "Due Soon",
      amount: "59.98",
      color: "#82C9D7"
    }
  ]
  return (
    <section className="min-h-[327] rounded-xl bg-white col-span-12 lg:col-span-5 row-span-1 p-5 sm:p-6">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Recurring Bills</h3>
        <Link href="/recurring-bills" className="text-xs text-[#696868] flex items-center gap-3">
        <span>See Details</span>
        <ChevronRight size={14} color="#696868" />
        </Link>
      </div>

      <div className="flex flex-col gap-3 pt-7">
        {recurringBills.map((data, index) => {
          const formattedAmount = formatAmount(parseInt(data.amount))

          return (
            <div key={index} className="flex items-center justify-between rounded-lg border-l-[4px] px-4 bg-[#F8F4F0] min-h-[61px] text-[#201F24]" style={{ borderColor: `${data.color}`}}>
              <h5 className="text-sm font-normal">{data.title}</h5>
              <h5 className="text-base font-semibold">{formattedAmount}</h5>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RecurringBillsCard