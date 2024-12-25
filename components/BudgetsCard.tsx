import { ChevronRight } from "lucide-react"
import Link from "next/link"

const BudgetsCard = () => {
  return (
    <section className="min-h-[410px] rounded-xl bg-white col-span-12 lg:col-span-5 row-span-2 p-5 sm:p-6">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Budgets</h3>
        <Link href="/budgets" className="text-xs text-[#696868] flex items-center gap-3">
        <span>See Details</span>
        <ChevronRight size={14} color="#696868" />
        </Link>
      </div>
    </section>
  )
}

export default BudgetsCard